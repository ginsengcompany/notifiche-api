var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var moment = require('moment');
var login = require('../controllers/LoginMnController');

router.post('/', function (req, res, next) {
    var filtro = { "username" : req.body.client_id, "password" : req.body.client_secret};
    login.getLogin(filtro, function (error, user) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        if (user === null) {
            response = {"error": true, "data": user};
            res.json(response);

        }
        else {
            var token ={access_token: jwt.sign({ "username" : req.body.client_id}, 'RESTFULAPIs'),
                token_type: "Bearer",
                expires_in: 3600000,
                username: req.body.client_id};
            res.json(token);
            var formatted =moment().format('YYYY-MM-DD HH:mm:ss Z');
            var sessione = {
                access_token : token.access_token,
                expires_in : token.expires_in,
                create_token : formatted,
                expires_token : formatted,
                token_type : token.token_type,
                username : token.username,
                session : {},
                session_type : 'N'
            }
            login.inserisciSession(sessione, function (error, session) {
                if (error) {
                    response = {"error": true, "message": error};
                }else if(session){

                }

            });
        }
    });
});

router.get('/', function (req, res, next) {
    var response = {};
    login.getValidate(function (error, validate) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        response = {"validate":true, "username":validate[0].username,"session":{}};
        res.json(response);
    });
});

module.exports = router;
