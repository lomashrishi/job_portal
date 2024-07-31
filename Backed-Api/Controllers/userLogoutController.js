


const userLogout = async (req, res) => {
  // Access the request body
  const token = req.header('x-access-token');
  // Blacklist the token
  tokenBlacklist.add(token);
  // Remove the token from the user's session
  req.session.destroy();
  res.send({ message: 'Logged out Successfully' });
};



// Export
module.exports = {

  userLogout
};
