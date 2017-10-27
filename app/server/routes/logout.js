var express = require('express');
var router = express.Router();
var logout = require('../controllers/LogoutMnController');


router.get('/', function (req, res, next) {
    var response = {};
    logout.getValidate(function (error, validate) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        response = {"validate":true, "username":validate[0].username,"session":{}};
        res.json(response);
    });
});

module.exports = router;