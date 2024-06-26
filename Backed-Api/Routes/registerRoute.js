const express = require('express');
const router = express.Router();
const registerController = require('../Controllers/registerController');

// Contact Page Routing For Data Process
router.post('/register', registerController.registerData)


// Export 
module.exports = router;