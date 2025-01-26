const express = require('express');
const router = express.Router();
const noticeGetController = require('../Controllers/noticeGetController');

// Contact Page Routing For Data Process
router.get('/notice-board',noticeGetController.noticesGet)


// Export 
module.exports = router;