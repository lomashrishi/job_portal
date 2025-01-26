const conn = require('../Configs/db');
const authenticateToken = require('../Middlewares/authMiddleware'); // Import the middleware

// Your GET endpoint
const currentJob = async (req, res) => {

  try {
    // const data=req.user.email;
    // console.log(data)
    const query = "SELECT * FROM `notifications` WHERE End_Date >= CURDATE() ORDER BY S_No DESC;"; // Define the SQL query
    const [rows] = await conn.promise().query(query); // Execute the query and wait for the result
    
    // console.log("Values From Notification", rows);
    
    if (rows.length > 0) { // Check if any rows are returned
      res.status(200).json(rows); // Send the data back to the client in JSON format
    } else {
      res.status(404).send({ message: "No Notifications Found" }); // Send a 404 response if no data is found
    }
  } catch (error) {
    console.error(error); // Log any errors that occur during the query execution
    res.status(500).send({ message: "Error Fetching Notifications" }); // Send a 500 error response to the client
  }
};

// Export
module.exports = {
  currentJob
};
