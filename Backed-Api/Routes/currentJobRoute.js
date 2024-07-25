const express = require('express');
const router = express.Router();
const authenticateToken = require('../Middlewares/authMiddleware'); // Import the middleware
const currentJobController = require('../Controllers/currentJobController');

// Contact Page Routing For Data Process
router.get('/current-job',authenticateToken,currentJobController.currentJob)


// Export 
module.exports = router;
