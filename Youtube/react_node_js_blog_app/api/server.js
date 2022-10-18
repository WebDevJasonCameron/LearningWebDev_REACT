const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log("Connected to MongoDB"));

app.listen(5551, function () {
	console.log("Connected");
});
