
const crypto = require('crypto');
const nodemailer = require('nodemailer');
require('dotenv').config();
const conn = require('../Configs/db');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

// Forgot password endpoint
const ResetLinkMail = async (req, res) => {
  try {
    const { email, mobile } = req.body;

    // Validate if the user exists with the provided email and mobile number
    const findUserSql = 'SELECT * FROM resetpass WHERE email = ? AND mobile = ?';
    conn.query(findUserSql, [email, mobile], (err, result) => {
      if (err) {
        console.error('Error finding user:', err);
        return res.status(500).json({ message: 'Error finding user' });
      }
      if (result.length === 0) {
        return res.status(404).json({ message: 'Email or mobile number not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');
      const expires = Date.now() + 3600000; // 1 hour

      // Update the reset token and expiration
      const updateTokenSql = 'UPDATE resetpass SET reset_password_token = ?, reset_password_expires = ? WHERE email = ?';
      conn.query(updateTokenSql, [token, expires, email], (err, result) => {
        if (err) {
          console.error('Error updating token:', err);
          return res.status(500).json({ message: 'Error updating token' });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Email not found' });
        }

        const mailOptions = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: 'Reset Your Password for Our Kanker Recruitment Portal',
          html: `
            <div style="font-family: 'Arial', sans-serif; background-color: #f7f7f7; padding: 20px; border-radius: 10px;">
              <h2 style="color: #333; text-align: center;">Reset Your Password</h2>
              <p style="font-size: 16px; color: #666; text-align: center;">
                Hello there,
              </p>
              <p style="font-size: 16px; color: #666; text-align: center;">
                We've received a request to reset your password for our tourism website. Click on the link below to reset your password:
              </p>
              <p style="text-align: center;">
                <a href="http://localhost:4200/reset-password?token=${token}" style="background-color: #e53935; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">Reset Password</a>
              </p>
              <p style="font-size: 16px; color: #666; text-align: center;">
                If you didn't request this change, please ignore this email.
              </p>
              <p style="font-size: 16px; color: #666; text-align: center;">
                Happy travels!<br>
                <strong>Kanker Recruitment Portal Team</strong>
              </p>
            </div>
          `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error('Error while sending email:', error);
            return res.status(500).json({ message: 'Error while sending email' });
          }
          res.json({ message: 'Password reset email sent successfully' });
        });
      });
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { ResetLinkMail };