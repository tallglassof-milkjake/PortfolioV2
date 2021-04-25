const path = require("path");

module.exports = function(app) {
    app.get("/about", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/about.html"));
    });

    app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
    });

    // app.get("/", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/about.html"));
    // });

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};