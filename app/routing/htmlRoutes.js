// Incorporate npm modules
var path = require("path");

function htmlRoutes(app) {

    // GET route for home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
        console.log("home path connected");
    });

    // GET route for survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("survey path connected");
    });

}

module.exports = htmlRoutes;
