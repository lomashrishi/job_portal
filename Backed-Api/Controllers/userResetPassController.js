
// Reset password endpoint
router.post('/reset-password', async (req, res) => {
    const { token, password } = req.body;
  
    const sql = 'SELECT * FROM users WHERE reset_password_token = ? AND reset_password_expires > ?';
     conn.query(sql, [token, Date.now()], async (err, result) => {
      if (err) {
        console.error('Error finding user with token:', err);
        return res.status(500).json({ message: 'Error finding user with token' });
      }
      if (result.length === 0) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
  
      const user = result[0];
      const hashedPassword = await bcrypt.hash(password, 10);
      const updateSql = 'UPDATE users SET password = ?, reset_password_token = NULL, reset_password_expires = NULL WHERE id = ?';
       conn.query(updateSql, [hashedPassword, user.id], (err, result) => {
        if (err) {
          console.error('Error updating password:', err);
          return res.status(500).json({ message: 'Error updating password' });
        }
        res.json({ message: 'Password reset successfully' });
      });
    });
  });