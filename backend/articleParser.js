// import { extract } from 'article-parser'

// with CommonJS environments
const { extract } = require('article-parser/dist/cjs/article-parser.js');

const urls = ["https://thefrisky.com/elon-musk-and-grimes-changed-their-babys-name/", 
"https://www.iol.co.za/news/science/cyril-ramaphosa-applauds-elon-musk-on-historic-space-flight-48799098",
 "https://www.indiatimes.com/technology/science-and-future/elon-musk-gets-emotional-after-spacex-crew-dragon-launch-recounts-18-year-struggle-514623.html",
  "http://feeds.marketwatch.com/~r/marketwatch/bulletins/~3/5wFhK6vLyrM/go",
   "https://www.nydailynews.com/news/national/ny-elon-musk-770-million-stock-20200529-bej7g54cqncydcikx6hwghz5gy-story.html#ed=rss_www.nydailynews.com/arcio/rss/category/news/", 
   "https://www.upi.com/Entertainment_News/2020/05/25/Grimes-Elon-Musk-tweak-their-infants-unusual-name/7081590427701/"]

urls.forEach((url) => {
  extract(url).then((article) => {
    var regex = /(<([^>]+)>)/ig
      , body = "<p>test</p>"
      , result = article.content.replace(regex, "");
    console.log("Regex: " + result);
    console.log("----------------------------------------------------------");
  }).catch((err) => {
    console.trace(err);
  });
});
