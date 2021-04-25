const express = require("express");

let app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// require("/routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
});