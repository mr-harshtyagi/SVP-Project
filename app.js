const express = require("express");
const app = express();

//get function for home route localhost:3000
app.get("/", function (req, res) {
  res.send("<h1>Hello World</h1>");
});
//get function for home route localhost:3000/home
app.get("/home", function (req, res) {
  res.send("Hello Home");
});

//port on which server is running
app.listen(3000, function () {
  console.log("Server started at port 3000");
});
