const express = require("express");
const app = express;

app.request("/", (req, res) => {
	console.log("Hey this is main url");
});

app.listen("5000", () => {
	console.log("Backend is running.");
});
