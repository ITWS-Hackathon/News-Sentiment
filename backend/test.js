const geturl = require("./search.js");
inputs = {
    q: 'ukraine',
    pageNumber: '1',
    pageSize: '50',
    autoCorrect: 'true',
    safeSearch: 'false',
    fromPublishedDate: '2022-03-01',
    toPublishedDate: 'null'
}
geturl(inputs)
