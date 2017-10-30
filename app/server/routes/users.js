var express = require('express');
var router = express.Router();
var users = require('../controllers/UsersMnController');
var ObjectID = require('mongodb').ObjectID;

router.get('/', function (req, res, next) {
    var filtro = {};
    var response = {};
    users.getLista(filtro ,function (error, utente) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = utente;
            res.json(response);
        }

    });
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    var filtro = {"username":id};
    var response = {};
    users.getUser(filtro ,function (error, utente) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        response = utente;
        res.json(response);
    });
});

router.put('/updateUtente/:id', function (req, res, next) {
    var nome = req.body.nome;
    var cognome = req.body.cognome;
    var username = req.body.username;
    var email = req.body.email;
    var id = req.params.id;
    var objectId = new ObjectID(id);
    var myquery  = {"_id":objectId};

    users.updateUtente(myquery ,{$set:{"firstname": nome,"lastname": cognome,"username": username,"email": email}},function (error, device) {
        if (error) {
            response1 = {"error": true, "status": 401};
            res.json(response1);
        }
        else{
            response1 = device;
            res.json(response1);
        }

    });


});

router.post('/inserisciUtente', function (req, res, next) {

    var nome = req.body.nome;
    var cognome = req.body.cognome;
    var username = req.body.username;
    var email = req.body.email;
    var password=req.body.password;
    var permessi=req.body.permessi;
    var image=req.body.image;
    var profilo =req.body.profilo;
    var date = new Date();
    var scadenza = req.body.scadenza;

    var utente= {
        "lastname" : cognome,
        "firstname" : nome,
        "profilo" : profilo,
        "username" : username,
        "password" : password,
        "permessi" : permessi,
        "scadenza_utenza" : scadenza,
        "create_date" : date,
        "create_user" : "setup",
        "email" : email,
        "image" : image,
        "update_user" : "setup",
        "update_date" : date
    };

    users.inserisciUtente(utente ,function (error, utente) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = utente;
            res.json(response);
        }

    });

});

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    var objectId = new ObjectID(id);
    var filtro  = {"_id":objectId};
    var response = {};
    users.deleteUser(filtro ,function (error, utente) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = utente;
            res.json(response);
        }
    });
});


module.exports = router;