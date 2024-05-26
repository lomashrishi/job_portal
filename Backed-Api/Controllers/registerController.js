const conn = require('../Configs/db');
const multer = require('multer');
const path = require('path');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'Uploads/Profile-Sign'));
  },
  filename: function (req, file, cb) {
    const mobile = req.body.Mobile;
    cb(null, `${file.fieldname}-${mobile}-${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage: storage });

// Middleware to handle file uploads
const uploadFields = upload.fields([
  { name: 'ProfileImage', maxCount: 1 },
  { name: 'SignatureImage', maxCount: 1 }
]);

// Main Function For Register Route
const registerData = async (req, res) => {
  uploadFields(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: 'Multer error', error: err });
    } else if (err) {
      return res.status(500).json({ message: 'Unknown error', error: err });
    }

    const DataInput = req.body;
    console.log(DataInput);
    const img = req.file;
    console.log("Img",img);
    const profileImage = req.files['ProfileImage'] ? req.files['ProfileImage'][0] : null;
    const signatureImage = req.files['SignatureImage'] ? req.files['SignatureImage'][0] : null;
    console.log(signatureImage );
    
    // Validate required Fields
    const requiredFields = [
      'Name', 'Dob', 'Gender', 'Category', 'MaritalStatus', 'Age', 'RelativeType', 'RelativeName',
      'MotherName', 'Nationality', 'DomicileCG', 'DomecileDistrict', 'Disabilities', 'FamilyYearlyIncome',
      'Email', 'Mobile', 'Password', 'RepeatPassword', 'HouseNo', 'Street', 'CityVillage', 'State', 'District',
      'PinCode', 'DeclarationCheck', 'InputCaptcha', 'InputOtp'
    ];

    for (const field of requiredFields) {
      if (!DataInput[field]) {
        return res.status(400).json({ message: `All Field ${field} Is Required.` });
      }
    }

    if (!profileImage || !signatureImage) {
      return res.status(400).json({ message: 'ProfileImage And SignatureImage Are Required.' });
    }

    // Define the SQL query to insert the user data into the database
    const sql = `INSERT INTO users (Name, Dob, Gender, Category, Marital_Status, Age, Relative_Type, Relative_Name,
      Mother_Name, Nationality, Domicile_CG, Domecile_District, Disabilities, Family_Yearly_Income, Email, Mobile,
      Password, Profile_Image_URL, Signature_Image_URL, HouseNo, Street, City_Village, State, District, PinCode)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      DataInput.Name, DataInput.Dob, DataInput.Gender, DataInput.Category, DataInput.MaritalStatus, DataInput.Age,
      DataInput.RelativeType, DataInput.RelativeName, DataInput.MotherName, DataInput.Nationality, DataInput.DomicileCG,
      DataInput.DomecileDistrict, DataInput.Disabilities, DataInput.FamilyYearlyIncome, DataInput.Email, DataInput.Mobile,
      DataInput.Password, profileImage.path, signatureImage.path, DataInput.HouseNo, DataInput.Street, DataInput.CityVillage,
      DataInput.State, DataInput.District, DataInput.PinCode
    ];

    // Execute the SQL query
    conn.query(sql, values, (error, results) => {
      if (error) {
        console.error('Error Inserting Data Into The Database:', error);
        return res.status(500).json({ message: 'Database Error.', error });
      }

      // Fetch the last inserted ID to generate the RegistrationNo
      const insertedId = results.insertId;
      const registrationNo = `KRP${String(insertedId).padStart(10, '0')}`;

      // Update the record with the generated RegistrationNo
      const updateSql = 'UPDATE users SET Registration_No = ? WHERE ID = ?';
      conn.query(updateSql, [registrationNo, insertedId], (updateError, updateResults) => {
        if (updateError) {
          console.error('Error Updating RegistrationNo:', updateError);
          return res.status(500).json({ message: 'Database error', updateError });
        }

        // Send A Success Response
        res.json({
          message: 'User Registered Successfully...',
          registrationNo: registrationNo,
          files: { profileImage, signatureImage },
          data: DataInput
        });
      });
    });
  });
};

// Export
module.exports = {
  registerData
};
