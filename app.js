const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();
const port = 3000
const path      = require("path");
const expressLayouts = require("express-ejs-layouts"); 

app.use(express.static(path.join('public')))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(expressLayouts);


// Index Route
app.get('/', (request, response) => {
    console.log(request);
    response.render(path.join('index'));
  });

// About Route
app.get('/about', (request, response) => {
    console.log(request);
    response.render(path.join('about'));
  });

// Works Route
app.get('/works', (request, response) => {
    console.log(request);
    response.sendFile(path.join('works'));
  });

  // Gallery Route
app.get('/gallery', (request, response) => {
    console.log(request);
    response.sendFile(path.join('gallery'));
  });


// Server Started
app.listen(port, () => console.log('My first app listening on port 3000! '));





