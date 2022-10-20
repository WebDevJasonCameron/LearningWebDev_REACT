const mongoose = req("mongoose");

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
			unique: true,
		},
		desc: {
			type: String,
			require: true,
		},
		photo: {
			type: String,
			require: false,
		},
		username: {
			type: String,
			require: true,
		},
		cats: {
			type: Array,
			require: false,
		},
	},
	{ timestapms: true }
);

module.exports = mongoose.model("Post", PostSchema);
