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

        // logic:

        // once we have the new survey data stored in an array 
        // (res.params.scores), we will compare it against every person 
        // in the friends api

        var friendScores = [];
        var newFriend = req.body.scores;

        //compare new friend to all of the friends 
        for (var i = 0; i < friends.length; i++) {
            var compareFriend = friends[i].scores;
            var newScore = 0;

            // this is the one-on-one comparison
            for (var j = 0; i < newFriend.length; j++) {
                var diff = Math.abs(newFriend[j] - compareFriend[j]);
                newScore = newScore + diff;
            }

            friendScores.push(newScore);
        }

        var bestScore = Math.min(friendScores);
        var indexBestFriend = friends.indexOf(bestScore);
        var bestFriend = friends(indexBestFriend);

        // return the new friend's best friend
        res.json(bestFriend);

        // add new friend to the friends
        friends.push(req.body);
    });
}

module.exports = apiRoutes;
