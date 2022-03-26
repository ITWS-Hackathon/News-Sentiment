const vader = require('vader-sentiment');
const input = 'This movie sucked.';
const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);
console.log(intensity);
