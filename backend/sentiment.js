const vader = require('vader-sentiment');
const input = 'This movie was good.';
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
console.log(intensity);
