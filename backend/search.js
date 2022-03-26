module.exports = (inputs) => {
    // examples 
    // inputs = {
    //     q: 'ukraine',
    //     pageNumber: '1',
    //     pageSize: '50',
    //     autoCorrect: 'true',
    //     safeSearch: 'false',
    //     fromPublishedDate: '2022-03-01',
    //     toPublishedDate: 'null'
    // }

    var axios = require("axios").default;

    var options = {
        method: 'GET',
        url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI',
        params: inputs,
        headers: {
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
            'X-RapidAPI-Key': "9a6e1bdfdamsh98ab579cab94727p16b209jsna63f7e602a4d"
        }
    };
    
    axios.request(options).then((response)=>{
        console.log(response.data);
        return respone.data;
    }).catch(function (error) {
        console.error(error);
    });
};