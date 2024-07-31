const express = require('express');
const router = express.Router();
const userLoginController = require('../Controllers/userLoginController');

// Contact Page Routing For Data Process
router.post('/logout',userLoginController.userLogout)


// Export 
module.exports = router;
