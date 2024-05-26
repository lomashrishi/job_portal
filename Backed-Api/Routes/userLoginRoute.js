const express = require('express');
const router = express.Router();
const userLoginController = require('../Controllers/userLoginController');

// Contact Page Routing For Data Process
router.post('/login',userLoginController.userLogin)


// Export 
module.exports = router;