var express = require("express");
var app = express();

app.use("/lama", function (req, res) {
	console.log("Lama");
});

app.listen(5551, function () {
	console.log("Connected");
});
