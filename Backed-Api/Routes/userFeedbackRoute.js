const express = require('express');
const router = express.Router();
const userFeedbackController = require('../Controllers/userFeedbackController');

// Contact Page Routing For Data Process
router.post('/user-feedback',userFeedbackController.userFeedback)


// Export 
module.exports = router;