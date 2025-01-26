const conn = require('../Configs/db');

// Your POST endpoint
const userFeedback = async (req, res) => {
  // Access the request body
<<<<<<< HEAD
  const { name, email, mobile, message } = req.body;
  // console.log(name, email, mobile, message);

  // Validate required fields
  if (!name || !email || !mobile || !message) {
=======
  const { Registration_No, name, email, mobile, message } = req.body;
  // console.log(Registration_No, name, email, mobile, message);

  // Validate required fields
  if (!Registration_No || !name || !email || !mobile || !message) {
>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4
    return res.status(400).json({ error: 'All Fields Are Required' });
  }

  // Insert data into MySQL
<<<<<<< HEAD
  const query = 'INSERT INTO user_feedback (user_name, user_email, user_mobile, user_feedback) VALUES (?, ?, ?, ?)';
  conn.query(query, [name, email, mobile, message], (err, results) => {
=======
  const query = 'INSERT INTO user_feedback (Registration_No, user_name, user_email, user_mobile, user_feedback) VALUES (?, ?, ?, ?, ?)';
  conn.query(query, [Registration_No, name, email, mobile, message], (err, results) => {
>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4
    if (err) {
      console.error('Error inserting into MySQL: ', err);
      return res.status(500).json({ error: 'Internal Server Error. Please Try Again Later.' });
    }
    // Send a response
<<<<<<< HEAD
    res.json({ message: 'Your Feedback Summited successfully...',});
=======
    res.status(200).json({ message: 'Your Feedback Submitted successfully...' });
>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4
  });
};

// Export
module.exports = {
  userFeedback
<<<<<<< HEAD
};
=======
};
>>>>>>> dafea539bbbf52364ff3d45a644cfb2d867032c4
