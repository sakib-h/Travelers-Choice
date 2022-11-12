import mongoose from "mongoose";
// Creating a schema for the database
const postSchema = mongoose.Schema({
	title: String,
	message: String,
	creator: String,
	tags: [String],
	selectedFile: String,
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

// Creating a model for the database
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
