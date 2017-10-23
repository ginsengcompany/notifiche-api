var express = require('express');
var router = express.Router();
var users = require('../controllers/UsersMnController');

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



module.exports = router;