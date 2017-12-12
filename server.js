// install modules
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// require route files
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

// create application instance of express
var app = express();

// declare the port and use process.env for Heroku
var PORT = process.env.PORT || 8080;

// set up data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// calls htmlRoutes and apiRoutes functions to pass them app
htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})
