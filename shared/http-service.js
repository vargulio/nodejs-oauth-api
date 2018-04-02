const https = require('https');

const httpService = {

    /**
     * Makes a get request and resolves the response or the error to the caller
     * @param url
     * @returns {Promise}
     */
    get: function (url) {
        return new Promise((resolve, reject)=> {
            https.get(url, (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    data = JSON.parse(data);
                    if (resp.statusCode !== 200) {
                        reject(data);
                    } else {
                        resolve(data);
                    }
                });
            }).on("error", (err) => {
                reject(err);
            });
        })
    }
};
module.exports = httpService;