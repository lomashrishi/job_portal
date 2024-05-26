const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const conn = require('../Configs/db');

const userLogin = async (req, res) => {
  const { email, mobile, password } = req.body;

  console.log("Data For Login =>", email, mobile, password);

  // Validate email, mobile, and password
  if (!email || !mobile || !password) {
    return res.status(400).send('Email, mobile, and password are required.');
  }

  // Query the database for the user by email and mobile
  conn.query('SELECT * FROM auth WHERE email = ? AND mobile = ?', [email, mobile], async (err, results) => {
    if (err) {
      return res.status(500).send('Server error');
    }

    if (results.length > 0) {
      const user = results[0];

      // Validate password
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({ email: user.email }, 'secretkey', { expiresIn: '1h' });
        return res.status(200).json({ message: 'User Login Successfully...', token });
      } else {
        return res.status(400).send('Invalid password');
      }
    } else {
      return res.status(400).send('Invalid email or mobile number');
    }
  });
};

// Export
module.exports = {
  userLogin
};
