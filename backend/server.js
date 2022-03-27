const express = require("express");
const app = express();
const port = 8000;
const axios = require("axios");
const path = require("path");
const generate = require("./generate.js");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,PATCH,GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

console.log(__dirname);

app.get("/keywords/:keyword", (req, res) => {
  console.log("Keyword", req.params.keyword, "recieved.");

  generate(req.params.keyword).then((data) => {
    res.send(data);
  });
});

app.listen(port, () => {
  console.log("Listening on *:8000");
});
