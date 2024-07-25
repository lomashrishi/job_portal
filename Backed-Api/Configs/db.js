const mysql = require('mysql2');
// Load environment variables from .env file
require('dotenv').config();

// Connect to MySQL
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Handle connection errors and establish the connection
conn.connect((err) => {
    if (err) {
        console.error(`Error Connecting To MySQL: ${err.stack}`);
        return;
    }  else {
    console.log('Connected To MySQL Successfully...');
    }
});
// Export the connection object to be used in other modules
module.exports = conn;
