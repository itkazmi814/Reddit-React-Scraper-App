const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new ArticleSchema object
const ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},

	link: {
		type: String,
		required: true,
		unique: true
	},

	subreddit: {
		type: String
	},

	datePosted: {
		type: Date
	},

	score: {
		type: Number
	},

	user: {
		type: String
	},

	isSaved: {
		type: Boolean,
		default: false
	},

	// `comments` is an object that stores a Comment id
	// The ref property links the ObjectId to the Note model
	// This allows us to populate the Article with an associated Note
	comments: [
		{
			type: Schema.Types.ObjectId,
			ref: "Comments"
		}
	]
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
