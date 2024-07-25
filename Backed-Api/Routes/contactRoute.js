const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contactController');

// Contact Page Routing For Data Process
router.post('/contact',contactController.contactData)


// Export 
module.exports = router;