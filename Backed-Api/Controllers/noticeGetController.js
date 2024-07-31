const conn = require('../Configs/db');

// Get all notices
const noticesGet = async (req, res) => {
  try {
    // Define the SQL query to fetch all notices
    const query = 'SELECT * FROM notice_board ORDER BY id DESC';
    
    // Execute the query and wait for the result
    const [rows] = await conn.promise().query(query);
    
    // Check if any rows are returned
    if (rows.length > 0) {
      // Send the data back to the client in JSON format
      res.status(200).json(rows);

   
    } else {
      // Send a 404 response if no data is found
      res.status(404).json({ message: 'No Notices Found in Notice Board' });
    }
  } catch (error) {
    // Log any errors that occur during the query execution
    console.error('Error fetching notices:', error);
    // Send a 500 error response to the client
    res.status(500).json({ message: 'Failed to fetch notices from the database' });
  }
};

// Export the function for use in other modules
module.exports = {
  noticesGet
};