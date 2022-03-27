module.exports = function(input){
    const keyword_extractor = require("keyword-extractor");
    //  Extract the keywords
    const extraction_result =
        keyword_extractor.extract(input,{
        language:"english",
        remove_digits: true,
        return_changed_case:true,
        remove_duplicates: false

    });
    return extraction_result;
}



