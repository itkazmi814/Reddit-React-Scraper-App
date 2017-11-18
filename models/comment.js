const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new CommentSchema object
const CommentSchema = new Schema({
	// `body` is of type String
	commenterName: {
		type: String
	},

	body: {
		type: String,
		required: true
	},

	createdAt: {
		type: Date,
		default: Date.now()
	}
});

// This creates our model from the above schema, using mongoose's model method
const Comments = mongoose.model("Comments", CommentSchema);

// Export the Note model
module.exports = Comments;
