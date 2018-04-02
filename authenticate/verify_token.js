const httpService = require('../shared/http-service');
const urls = require('../config/urls');

module.exports = function (token) {

    let verifyTokenUrl = urls.googleVerifyTokenUrl + token;
    return httpService.get(verifyTokenUrl);

};

