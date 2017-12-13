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

        // once we have the new survey data stored in an array (res.params.answers),
        // , we will compare it against every person in the friends api
        var newFriend = req.body.answers;
        console.log("answers: " + newFriend);
        var friendScores = [];
        var newScore;

        // going to compare new friend scores to all of the friend scores 
        for (var i = 0; i < friends.length; i++) {
            // start a new score for each 
            newScore = 0;

            // isolates answers of one friend
            var compareFriend = friends[i].answers;
            console.log("compare friend: " + compareFriend);

            // this is the one-on-one comparison
            for (var j = 0; j < newFriend.length; j++) {
                var diff = Math.abs(parseInt(newFriend[j]) - parseInt(compareFriend[j]));
                newScore = newScore + diff;
            }

            // pushes one-on-one scores to the array of all scores
            friendScores.push(newScore);
        }

        console.log("all scores: " + friendScores);

        // trick i learned on jstips.com: the "..." will spread the values inside
        // friendScores array into Math.min()
        var bestScore = Math.min(...friendScores);
        console.log("bestScore is: " + bestScore);

        var indexBestFriend = friendScores.indexOf(bestScore);
        console.log("indexBestFriend is: " + indexBestFriend);

        var bestFriend = friends[indexBestFriend];
        console.log(bestFriend);

        // return the new friend's best friend
        res.json(bestFriend);

        // add new friend to the friends
        friends.push(req.body);
    });
}

module.exports = apiRoutes;
