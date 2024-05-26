const conn = require('../Configs/db');
// Your POST endpoint
const contactData = async(req, res) => {
      // Access the request body
      const { name,email, mobile,message} = req.body;
      // Validate required fields
      if (!name || !email || !mobile || !message) {
        return res.status(400).json({ error: 'All Fields Are Required' });
      }
      // Insert data into MySQL
      const query = 'INSERT INTO contacts (name, mobile, email, message) VALUES (?, ?, ?, ?)';
      conn.query(query, [name, mobile, email, message], (err, results) => {
        if (err) {
          console.error('Error inserting into MySQL: ', err);
          return res.status(500).json({ error: 'Internal Server Error. Please Try Again Later.' });
        }
        // Send a response
        res.json({ message: 'Messages Send successfully...', data: { name, mobile, email, message } });
      });
    };

    // Export
module.exports = {
    contactData
};