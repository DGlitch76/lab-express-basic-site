const express = require('express');
const expressLayouts = require("express-ejs-layouts"); 

// We create our own server named app
// Express server will be handling requests and responses
const app = express();
const port = 3000
const path = require("path");




app.set("views",path.join( __dirname + "/views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, 'public')));


// Index Route
app.get('/', (request, response) => {
    console.log(request);
    response.render('index');
  });

// About Route
app.get('/about', (request, response) => {
    console.log(request);
    response.render('about');
  });

// Works Route
app.get('/works', (request, response) => {
    console.log(request);
    response.sendFile('works');
  });

  // Gallery Route
app.get('/gallery', (request, response) => {
    console.log(request);
    response.sendFile('gallery');
  });


// Server Started
app.listen(port, () => console.log('My first app listening on port 3000! '));





