const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();
const port = 3000

app.use(express.static('public'))

app.use(express.static('views'));


// Index Route
app.get('/home', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/index.html');
  });

// About Route
app.get('/about', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/about.html');
  });

// Works Route
app.get('/works', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/works.html');
  });

  // Gallery Route
app.get('/gallery', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/gallery.html');
  });


// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));
