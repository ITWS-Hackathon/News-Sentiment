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

var full_map = new Map();

// API call
axios.request(options).then((res) => {
    console.log(res);

    let allSentiment = [];
    res.data.value.forEach((article) => {
        let content = article["body"].replace(/(\r\n|\n|\r|\t)/gm, "").replace(/\s\s+/g, ' ').replace("[^a-zA-Z0-9 -]", "");
        console.log(content);
        allSentiment.push(sentimentAnalyzer(content));
        let article_map = new Map()
        article_map.set("url", article["url"]);
        article_map.set("description", article["description"]);
        article_map.set("sentiment", allSentiment);
        article_map.set("keywords", extractKeywords(content));
        full_map.set(article["title"], article_map);

    });
    console.log(full_map)
        // console.log(allSentiment);
        // console.log("---------------------------------------------------");
        // console.log(allKeywords);
}).catch(function(error) {
    console.error(error);
});