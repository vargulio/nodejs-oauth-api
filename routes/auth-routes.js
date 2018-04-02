const router = require('express').Router();
const verifyToken = require('../authenticate/verify_token');
const httpService = require('../shared/http-service');
const urls = require('../config/urls');


/**
 * This endpoint waits for a token as a get parameter in the request
 * url. Then it makes a request to Google api to verify the token and
 * if it's valid makes another request to get the user data from
 * the google api.
 */
router.get('/login', (req, res)=> {

    verifyToken(req.query.access_token).then(data => {

        httpService.get(urls.googleGetUserDataUrl + req.query.access_token).then(data => {
            //TODO save new user/get an existing one from db
            res.send(data);
        }).catch(error => {
            res.status(400);
            res.send(error);
        });

    }).catch(error => {
        res.status(400);
        res.send(error);
    })
});

module.exports = router;