const conn = require('../Configs/db');

// Your POST endpoint
const userFeedback = async (req, res) => {
  // Access the request body
  const { Registration_No, name, email, mobile, message } = req.body;
  // console.log(Registration_No, name, email, mobile, message);

  // Validate required fields
  if (!Registration_No || !name || !email || !mobile || !message) {
    return res.status(400).json({ error: 'All Fields Are Required' });
  }

  // Insert data into MySQL
  const query = 'INSERT INTO user_feedback (Registration_No, user_name, user_email, user_mobile, user_feedback) VALUES (?, ?, ?, ?, ?)';
  conn.query(query, [Registration_No, name, email, mobile, message], (err, results) => {
    if (err) {
      console.error('Error inserting into MySQL: ', err);
      return res.status(500).json({ error: 'Internal Server Error. Please Try Again Later.' });
    }
    // Send a response
    res.status(200).json({ message: 'Your Feedback Submitted successfully...' });
  });
};

// Export
module.exports = {
  userFeedback
};