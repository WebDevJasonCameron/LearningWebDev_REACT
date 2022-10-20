const mongoose = req("mongoose");

const CatSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
	},
	{ timestapms: true }
);

module.exports = mongoose.model("Cats", CatSchema);
