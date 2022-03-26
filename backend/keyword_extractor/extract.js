module.exports = function(input){
    const keyword_extractor = require("keyword-extractor");
    const sentence = input

    //  Extract the keywords
    const extraction_result =
    keyword_extractor.extract(sentence,{
        language:"english",
        remove_digits: true,
        return_changed_case:true,
        remove_duplicates: false

    });
    return extraction_result;
}



