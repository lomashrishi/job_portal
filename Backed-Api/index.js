const express = require('express');
const path = require('path'); // Import the 'path' module
const BodyParser = require('body-parser');
const cors = require('cors');
const contactRoute =require('./Routes/contactRoute');
const registerRoute =require('./Routes/registerRoute');
const userLoginRoute =require('./Routes/userLoginRoute');

//  object for express
const app = express();

// Middleware
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());

// Port No. For Running Api 
const PORT = process.env.PORT || 3100;

// Set 'views' directory for any views
app.set('Views', path.join(__dirname, 'Views'));
// Set EJS as the view engine
app.set('view engine', 'ejs');

// Message On Browser - Route to render index.ejs
app.get("/", (req, res) => {
    res.render('index');
});

 
// Calling Routing Apis -
app.use('/api/post',contactRoute);
app.use('/api/post',registerRoute);
app.use('/api/post',userLoginRoute);

  // Start the server
app.listen(PORT, () => {
    console.log(`Kanker Recruitment Portal Server Is Running On => http://localhost:${PORT}`);
  });