const axios = require("axios").default;
const sentimentAnalyzer = require("./sentiment.js");
const extractKeywords = require("./keywordExtract.js");

function compare(a, b) {
    if (a["sentiment"] > b["sentiment"]) return 1;
    if (a["sentiment"] < b["sentiment"]) return -1;
    return 0;
}

async function process(string, all_articles) {
    let keywords = extractKeywords(string.replace(/\s\s+/g, ' '));
    let new_keywords = [];
    Object.keys(keywords).forEach((word) => {
        new_keywords.push({ "text": word, "value": keywords[word] })
    });

    all_articles.sort(compare);

    var bottom = {};
    bottom["1"] = all_articles[0];
    bottom["2"] = all_articles[1];
    bottom["3"] = all_articles[2];

    var length = all_articles.length;
    var top = {};
    top["1"] = all_articles[length - 2];
    top["2"] = all_articles[length - 1];
    top["3"] = all_articles[length - 3];

    var average = 0;
    all_articles.forEach((article) => {
        average += article["sentiment"];
    });
    average /= length;

    var sentiment = {};
    sentiment["average"] = average;
    sentiment["top"] = top;
    sentiment["bottom"] = bottom;

    var output = {};
    output["keywords"] = new_keywords;
    output["sentiment"] = sentiment;

    console.log(output);
    return output;
 }

module.exports = async function(input) {
    var all_articles = [];
    var string = "";
    // API call
    let maxPages = 4;
    for (let i = 0; i < maxPages; i++) {
        inputs = {
            q: input,
            pageNumber: i.toString(),
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
                'X-RapidAPI-Key': "53a08ade50msh528381ec2056ee3p1ce5a0jsn3a56ec7bf691"
            }
        };
        console.log("help1");
        let res = await axios.request(options);
        console.log("help2");
        let numPagesToGet = Math.floor((res.data.totalCount) / 50);
        if (numPagesToGet > 4) numPagesToGet = 4;
        let data = res.data.value;
        data.forEach((article) => {
            let content = article["body"].replace(/(\r\n|\n|\r|\t)/gm, "").replace(/\s\s+/g, ' ').replace(/['".,-]+/g, '').replace(/[)/(]+/g, '').replace(/[\[\]']+/g, '');
            string += content + " ";
            let article_ = {};
            article_["title"] = article["title"];
            article_["url"] = article["url"];
            article_["description"] = article["description"];
            article_["sentiment"] = sentimentAnalyzer(content);
            all_articles.push(article_);
        });
    }
    return await process(string, all_articles);
}