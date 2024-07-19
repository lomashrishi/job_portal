const conn = require("../Configs/db");
const bcrypt = require("bcrypt");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure Multer for file uploads
const tempStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../Uploads/Profile-Sign");
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    // Temporarily store the filename, we will update it later
    cb(null, `${file.fieldname}_temp${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error("Invalid file type. Only JPEG and PNG are allowed."));
  }
  cb(null, true);
};

// Multer middleware setup
const upload = multer({
  storage: tempStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 150 * 1024 },
}).fields([
  { name: "ProfileImage", maxCount: 1 },
  { name: "SignatureImage", maxCount: 1 },
]);

const generateRegistrationNumber = () => {
  return new Promise((resolve, reject) => {
    const prefix = "KJP";
    const query = "SELECT COUNT(*) AS count FROM users";

    conn.query(query, (err, result) => {
      if (err) return reject(err);

      const count = result[0].count + 1;
      const registrationNumber = `${prefix}${String(count).padStart(7, "0")}`;
      resolve(registrationNumber);
    });
  });
};

const validateRequiredFields = (data) => {
  const requiredFields = [
    "Name", "Dob", "Gender", "Category", "MaritalStatus", "Age", "RelativeType", "RelativeName",
    "MotherName", "Nationality", "DomicileCG", "DomecileDistrict", "Disabilities", "FamilyYearlyIncome",
    "Email", "Mobile", "Password", "RepeatPassword", "HouseNo", "Street", "CityVillage", "State",
    "District", "PinCode", "DeclarationCheck", "InputCaptcha", "InputOtp"
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      return `${field} is required`;
    }
  }
  return null;
};

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Main Function
const userRegister = (req, res) => {
  upload(req, res, async (err) => {
    if (err instanceof multer.MulterError || err) {
      return res.status(400).json({ message: "File upload error", error: err.message });
    }

    const profileImage = req.files["ProfileImage"] ? req.files["ProfileImage"][0] : null;
    const signatureImage = req.files["SignatureImage"] ? req.files["SignatureImage"][0] : null;

    if (!profileImage || !signatureImage) {
      return res.status(400).json({ message: "ProfileImage and SignatureImage are required" });
    } else if (profileImage.size < 30 * 1024 || profileImage.size > 150 * 1024) {
      return res.status(400).json({ message: "ProfileImage size should be between 30KB to 150KB" });
    } else if (signatureImage.size < 30 * 1024 || signatureImage.size > 150 * 1024) {
      return res.status(400).json({ message: "SignatureImage size should be between 30KB to 150KB" });
    }

    // Data From Frontend
    const dataInput = req.body;
    const validationError = validateRequiredFields(dataInput);

    if (validationError) {
      fs.unlink(profileImage.path, () => {});
      fs.unlink(signatureImage.path, () => {});
      return res.status(400).json({ message: validationError });
    }

    const checkUserQuery = "SELECT * FROM users WHERE Email = ? OR Mobile = ?";
    conn.query(checkUserQuery, [dataInput.Email, dataInput.Mobile], async (err, results) => {
      if (err) {
        fs.unlink(profileImage.path, () => {});
        fs.unlink(signatureImage.path, () => {});
        return res.status(500).json({ message: "Database query error", error: err });
      }

      if (results.length > 0) {
        fs.unlink(profileImage.path, () => {});
        fs.unlink(signatureImage.path, () => {});
        return res.status(400).json({ message: "User already registered with the given email or mobile number" });
      }

      try {
        // Rename files with the mobile number included
        const profileImageNewName = `${profileImage.fieldname}_${dataInput.Mobile}${path.extname(profileImage.originalname)}`;
        const signatureImageNewName = `${signatureImage.fieldname}_${dataInput.Mobile}${path.extname(signatureImage.originalname)}`;

        fs.renameSync(profileImage.path, path.join(profileImage.destination, profileImageNewName));
        fs.renameSync(signatureImage.path, path.join(signatureImage.destination, signatureImageNewName));

        const registrationNumber = await generateRegistrationNumber();
        const hashedPassword = await hashPassword(dataInput.Password);
        const formData = {
          Registration_No: registrationNumber,
          Name: dataInput.Name,
          Dob: dataInput.Dob,
          Gender: dataInput.Gender,
          Category: dataInput.Category,
          Marital_Status: dataInput.MaritalStatus,
          Age: dataInput.Age,
          Relative_Type: dataInput.RelativeType,
          Relative_Name: dataInput.RelativeName,
          Mother_Name: dataInput.MotherName,
          Nationality: dataInput.Nationality,
          Domicile_CG: dataInput.DomicileCG,
          Domecile_District: dataInput.DomecileDistrict,
          Disabilities: dataInput.Disabilities,
          Family_Yearly_Income: dataInput.FamilyYearlyIncome,
          Email: dataInput.Email,
          Mobile: dataInput.Mobile,
          Password: hashedPassword,
          Profile_Image_URL: profileImageNewName,
          Signature_Image_URL: signatureImageNewName,
          HouseNo: dataInput.HouseNo,
          Street: dataInput.Street,
          City_Village: dataInput.CityVillage,
          State: dataInput.State,
          District: dataInput.District,
          PinCode: dataInput.PinCode,
          Time_Stamp: new Date(),
        };

        const query = "INSERT INTO users SET ?";
        conn.query(query, formData, (err, result) => {
          if (err) {
            fs.unlink(path.join(profileImage.destination, profileImageNewName), () => {});
            fs.unlink(path.join(signatureImage.destination, signatureImageNewName), () => {});
            return res.status(500).json({ message: "Error saving data to database", error: err });
          }

          return res.status(200).json({
            message: "User registered successfully.",
            registrationNumber: registrationNumber,
            name: dataInput.Name,
            email: dataInput.Email,
            mobile: dataInput.Mobile,
            // profileImageURL: profileImageNewName,
          });
        });
      } catch (err) {
        fs.unlink(path.join(profileImage.destination, profileImageNewName), () => {});
        fs.unlink(path.join(signatureImage.destination, signatureImageNewName), () => {});
        return res.status(500).json({ message: "Error generating registration number or saving data", error: err });
      }
    });
  });
};

// Exports 
module.exports = {
  userRegister,
};
