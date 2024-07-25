const express = require('express');
const router = express.Router();
const notificationController = require('../Controllers/notificationController');

// Contact Page Routing For Data Process
router.get('/notification',notificationController.Notifications)


// Export 
module.exports = router;
