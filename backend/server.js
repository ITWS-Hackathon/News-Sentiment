const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const path = require('path');


app.use(express.static(path.join(__dirname, '../frontend/build')));

console.log(__dirname);

app.listen(port, () => {
  console.log('Listening on *:3000');
});

app.get("/keywords/:keys", (req, res) => {
  

  // let keywords = String(req.params.keys).replace("-", " ");

  inputs = {
    q: keywords,
    pageNumber: '1',
    pageSize: '50',
    autoCorrect: 'true',
    safeSearch: 'false',
    fromPublishedDate: '2022-03-01',
    toPublishedDate: 'null'
  };

  res.send("All the JSON data");
});