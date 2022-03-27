module.exports = (theTexts) => {
   const vader = require("vader-sentiment");
   const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(theTexts);
   return intensity.compound;
}
   
