const express = require('express');
const router = express.Router();
const userResetEmailController = require('../Controllers/userResetEmailController');

// Contact Page Routing For Data Process
router.post('/send-password-reset-email',userResetEmailController.ResetLinkMail)


// Export 
module.exports = router;