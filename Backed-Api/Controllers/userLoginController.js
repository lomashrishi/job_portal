const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conn = require('../Configs/db');

const userLogin = async (req, res) => {
  // Access the request body
  const { email, mobile, password } = req.body;

  // Validate required fields
  if (!email || !mobile || !password) {
    return res.status(400).json({ error: 'All Fields Are Required' });
  }

  // Query the database for the user by email and mobile
  conn.query('SELECT Name, Email, Mobile, Password FROM users WHERE email = ? AND mobile = ?', [email, mobile], async (err, results) => {
    if (err) {
      return res.status(500).send('Internal Server Error..');
    }
    if (results.length > 0) {
      const user = results[0]; // stored values from table

      // Validate password
      const validPassword = await bcrypt.compare(password, user.Password); // Note: Ensure that `user.Password` is used as per the column name in your database
      if (validPassword) {
        const token = jwt.sign({ email: user.Email, mobile: user.Mobile, name: user.Name }, 'secretkey', { expiresIn: '30m' });
        return res.status(200).json({ message: 'User Login Successfully...', token });
      } else {
        return res.status(400).json({ message: 'Invalid password' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid Email Or Mobile' });
    }
  });
};

// Export
module.exports = {
  userLogin
};
