// authMiddleware.js
const jwt = require('jsonwebtoken');
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  // console.log("Tjwt =>",token);
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Please Login...' });
  }
  jwt.verify(token,'secretkey', (err, user) => {
    if (err) return res.sendStatus(403).json({ message: 'Authorization Successfully..' }); // Forbidden
    req.user = user;
    next();
  });
};
module.exports = authenticateToken;
