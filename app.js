const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Default Route
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/home", function (req, res) {
  res.send("Hello Home");
});

//port on which server is running
app.listen(3000, function () {
  console.log("Server started at port 3000");
});
