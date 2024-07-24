const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middlewares/authMiddleware'); // Import the middleware
const contactController = require('../Controllers/contactController');

// Contact Page Routing For Data Process
router.post('/contact',authenticateToken,contactController.contactData)


// Export 
module.exports = router;