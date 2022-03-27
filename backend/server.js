const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');
const generate = require("./generate.js");


app.use(express.static(path.join(__dirname, '../frontend/build')));

console.log(__dirname);

app.listen(port, () => {
  console.log('Listening on *:3000');
});

app.get("/keywords/:keys", (req, res) => {
  

  let keywords = req.body.keywords;

  

  res.send(generate(keywords[0]));
});