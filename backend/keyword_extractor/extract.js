// const express = require('express');
// const router = express.Router();

// module.exports = router;

// Test input
let sentence = "Some interesting information about Ukraine and Russia";

//Usage: rake.generate(text-input, optional-stopwords)
// const myStopwords = ['for', 'the', 'a', 'stands', 'test', 'man', 'woman'];
// const opts = {stopwords: myStopwords};

const rake = require("node-rake");
const keywords = rake.generate(sentence);
console.log(keywords);
