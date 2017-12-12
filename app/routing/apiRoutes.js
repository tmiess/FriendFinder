// incorporate data modules
var friends = require("../data/friends.js");

// incorporate npm modules
var path = require("path");

function apiRoutes(app) {
    // GET routes for API links://

    // displays JSON of all possible friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // posts incoming survey results to out friends api
    // compatibility logic goes here as well
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        res.json(req.body);
    });
}

module.exports = apiRoutes;
