var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var moment = require('moment');
var login = require('../controllers/LoginMnController');

router.post('/', function (req, res, next) {
    var filtro = {"username" : req.body.client_id, "password" : req.body.client_secret};
    login.getLogin(filtro, function (error, user) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        if (user === null) {
            response = {"error": true, "data": user};
            res.json(response);

        }
        else if(!req.body.impronta) {
            var token ={access_token: jwt.sign({ "username" : req.body.client_id}, 'RESTFULAPIs'),
                token_type: "Bearer",
                expires_in: 3600000,
                username: req.body.client_id};
            res.json(token);
            var a = new Date();
            var sessione = {
                access_token : token.access_token,
                expires_in : token.expires_in,
                create_token : a,
                expires_token : a,
                token_type : token.token_type,
                username : token.username,
                session : {},
                session_type : 'N'
            };
            var indiceVuoto = {"username" : req.body.client_id};
            login.getSessione(indiceVuoto, function (error, getSession) {
                if (error) {
                    response = {"error": true, "message": error};
                }else if(getSession.length<1){

                    login.inserisciSession(sessione, function (errore, session) {
                        if (errore) {
                            response = {"error": true, "message": errore};
                        }else if(session){

                        }

                    });

                }
                else if(getSession.length>0){
                    var indiceGetSessione = {"_id" : getSession[0]._id};
                    login.aggiornaSessione(indiceGetSessione ,{$set:{"expires_token":a}},function (error, device) {
                        if (error) {
                            response = {"error": true, "status": 401};
                        }

                    });

                }

            });
        }
        else if(req.body.impronta){

            var success = {access_token:req.body.impronta,id_dispositivo:req.body.id_dispositivo, username : req.body.client_id};

            res.json(success);

            var indiceVuoto = {"access_token" : req.body.impronta};
            var a = new Date();
            var client = {"clientId":req.body.id_dispositivo};
            var sessione = {
                access_token : req.body.impronta,
                expires_in : 1471228928,
                create_token : a,
                expires_token : a,
                token_type : "Bearer",
                username : req.body.client_id,
                session : client,
                session_type : 'A'
            };

            login.getSessione(indiceVuoto, function (error, getSession) {
                if (error) {
                    response = {"error": true, "message": error};
                }else if(getSession.length<1){

                    login.inserisciSession(sessione, function (errore, session) {
                        if (errore) {
                            response = {"error": true, "message": errore};
                        }else if(session){

                        }

                    });

                    var dispositivo = {
                         "id" : "1-"+req.body.id_dispositivo,
                         "tipoDispositivo" : req.body.dispositive_type,
                         "clientId" : req.body.id_dispositivo,
                         "descrizione" : req.body.descrizione,
                         "impronta" : req.body.impronta,
                         "tipo" : req.body.tipo,
                         "createUser" : req.body.client_id,
                         "updateUser" : req.body.client_id,
                         "attivo" : false,
                         "createDate" : a,
                         "updateDate" : a,
                         "applicazione" : req.body.applicazione
                     };


                    login.inserisciDispositivo(dispositivo, function (errore, session) {
                        if (errore) {
                            response = {"error": true, "message": errore};
                        }else if(session){

                        }

                    });

                }
                else if(getSession.length>0){
                    var indiceGetSessione = {"_id" : getSession[0]._id};
                    login.aggiornaSessione(indiceGetSessione ,{$set:{"expires_token":a}},function (error, device) {
                        if (error) {
                            response = {"error": true, "status": 401};
                        }

                    });

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
