// DEPENDENCIES of npm packages, gives functionality to server
var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
// Tell node that we are creating an "express" server
var app = express();

// express static
app.use(express.static("app/public"));

// Set port. 
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// ROUTER give our server a "map" of how to respond when users visit or request data from various URLs.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER "starts" our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});