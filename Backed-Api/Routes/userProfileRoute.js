const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middlewares/authMiddleware'); // Import the middleware
const userProfileController = require('../Controllers/userProfileController');

// Contact Page Routing For Data Process
router.get('/user-profile',authenticateToken,userProfileController.userProfile)


// Export 
module.exports = router;

