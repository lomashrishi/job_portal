const mysql = require('mysql'); // Ensure to import mysql for mysql.escape()
const conn = require('../Configs/db');
const authenticateToken = require('../Middlewares/authMiddleware'); // Import the middleware
// Your GET endpoint
const userProfile = async (req, res) => {

  try {
    // testing 
    const email=req.user.email;
    const mobile=req.user.mobile;
    // console.log("Email =>", email,"Mobile=>",mobile)
    const query = `
      SELECT ID, Registration_No, Name, Dob, Gender, Category, Marital_Status, Age, Relative_Type, Relative_Name, Mother_Name, Nationality, Domicile_CG, Domecile_District, Disabilities, Family_Yearly_Income, Email, Mobile, Profile_Image_URL, Signature_Image_URL, HouseNo, Street, City_Village, State, District, PinCode, Time_Stamp FROM users WHERE Mobile = ${mysql.escape(mobile)} AND Email = ${mysql.escape(email)};`;
    
    // Note: mysql.escape() is used to safely escape user input in the query.
    // const query = `SELECT * FROM users;`;
 // Define the SQL query
    const [rows] = await conn.promise().query(query); // Execute the query and wait for the result
    
    // console.log("Values From Table", rows);

    if (rows.length > 0) { // Check if any rows are returned
      res.status(200).json(rows[0]); // Send the data back to the client in JSON format
    } else {
      res.status(404).send({ message: "User Profile ID Not Found" }); // Send a 404 response if no data is found
    }
  } catch (error) {
    console.error(error); // Log any errors that occur during the query execution
    res.status(500).send({ message: "Error Fetching User Profile" }); // Send a 500 error response to the client
  }
};

// Export
module.exports = {
  userProfile
};
