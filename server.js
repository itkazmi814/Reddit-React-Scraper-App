const express = require("express");
const path = require("path");
const port = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("./client/public/index"));
// }
app.use(
	"/static",
	express.static(path.join(__dirname, "./client/public/index"))
);

//Add routes
require("./routes/api-routes")(app);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/reactRedditScraper",
	{
		useMongoClient: true
	}
);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(port, function() {
	console.log(`🌎 ==> Server now on port ${port}!`);
});
