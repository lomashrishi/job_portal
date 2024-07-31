const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conn = require('../Configs/db');


// API endpoint to reset password

const userChangePass = async (req, res) =>  {
    const { Registration_No, oldPassword, newPassword, confirmPassword } = req.body;
  
    if (!Registration_No || !oldPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: 'Please provide Registration_No, oldPassword, newPassword, and confirmPassword.' });
    }
  
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'New password and confirm password do not match.' });
    }
  
    try {
      // Fetch the user by Registration_No
     conn.query('SELECT Password FROM users WHERE Registration_No = ?', [Registration_No], async (err, results) => {
        if (err) throw err;
  
        if (results.length === 0) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        const user = results[0];
  
        // Validate the old password
        const isMatch = await bcrypt.compare(oldPassword, user.Password);
        if (!isMatch) {
          return res.status(400).json({ message: 'Old password is incorrect' });
        }
  
        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
  
        // Update the password in the database
       conn.query('UPDATE users SET Password = ? WHERE Registration_No = ?', [hashedPassword, Registration_No], (err, results) => {
          if (err) throw err;
  
          res.status(200).json({ message: 'Password Updated successfully' });
        });
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
 
// Export
module.exports = {
    userChangePass
  };
  