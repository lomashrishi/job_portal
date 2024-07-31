const express = require('express');
const router = express.Router();
const userChangePassController = require('../Controllers/userChangePassController');

// Contact Page Routing For Data Process
router.post('/user-password-change',userChangePassController.userChangePass)


// Export 
module.exports = router;