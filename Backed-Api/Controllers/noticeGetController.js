const conn = require('../Configs/db');

// Your GET endpoint for fetching notices
const noticesGet = async (req, res) => {
  try {
    const query = "SELECT * FROM `notice_board` ORDER BY `notice_date` DESC, `id` DESC"; // Define the SQL query
    const [rows] = await conn.promise().query(query); // Execute the query and wait for the result
    
    // console.log("Values From Notice Board", rows);

    if (rows.length > 0) { // Check if any rows are returned
      res.status(200).json(rows); // Send the data back to the client in JSON format
    } else {
      res.status(404).send({ message: "No Notices Found" }); // Send a 404 response if no data is found
    }
  } catch (error) {
    console.error(error); // Log any errors that occur during the query execution
    res.status(500).send({ message: "Error Fetching Notices" }); // Send a 500 error response to the client
  }
};

// Export
module.exports = {
  noticesGet
};
