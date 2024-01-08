// Create web server application
// Create web server application
// 1. Load the 'express' module
var express = require('express');
// 2. Create an object of the express module
var app = express();
// 3. Create a middleware function
app.use(function(req, res, next){
    console.log("In comes a " + req.method + " to " + req.url);
    next();
});
// 4. Create a route for GET request
app.get('/', function(req, res){
    res.send("Hello, world!");
});
// 5. Start the web server on port 3000
app.listen(3000);