const express = require('express');
const router = express.Router();
const registerController = require('../Controllers/registerController');



router.post(('/otp'),registerController.userRegister);










// Export 
module.exports = router;