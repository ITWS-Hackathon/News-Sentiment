 module.exports = function(input){
    const vader = require('vader-sentiment');
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
    return intensity;
 }
    
