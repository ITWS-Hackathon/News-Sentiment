module.exports = function(input){

    // example
    // const input = "hey there russia desert bomb strike on ukraine. This did not actually happen. This is just a test. This is just a test. Ukraine is cool. Ukraine loses to russia."

    const rake = require('node-rake');
    const keyphrases = rake.generate(input);
    const keywords = {};
    for (let i = 0; i < keyphrases.length; i++){
        let phrase = keyphrases[i].split(" ");

        //split words and add to json object
        for (let j = 0; j < phrase.length; j++){
            let word = phrase[j].toLowerCase()
            if (!(word in keywords)) {keywords[word] = 1}
            else keywords[word] += 1 ;
        }     
    }
    return keywords;
}




