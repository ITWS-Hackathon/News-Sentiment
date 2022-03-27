const axios = require("axios").default;
const sentimentAnalyzer = require("./sentiment.js");
const articleParser = require("./articleParser.js");
const extractKeywords = require("./keywordExtract.js");

inputs = {
    q: 'ukraine',
    pageNumber: '1',
    pageSize: '50',
    autoCorrect: 'true',
    safeSearch: 'false',
    fromPublishedDate: '2022-03-01',
    toPublishedDate: 'null'
}


var options = {
    method: 'GET',
    url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
    params: inputs,
    headers: {
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'X-RapidAPI-Key': "9a6e1bdfdamsh98ab579cab94727p16b209jsna63f7e602a4d"
    }
};

// API call
axios.request(options).then((res) => {
    console.log(res);

    let allSentiment = [];
    let allKeywords = [];
    res.data.value.forEach((article) => {
        let content = article["body"];
        allSentiment.push(sentimentAnalyzer(content));
        allKeywords.push(extractKeywords(content));
    });
    // console.log(allSentiment);
    // console.log("---------------------------------------------------");
    // console.log(allKeywords);
}).catch(function (error) {
    console.error(error);
});