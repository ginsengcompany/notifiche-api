var express = require('express');
var notifiche = require('../controllers/notificheMnController');
var router = express.Router();

router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var codiceDispositivo = params.codicedispositivo;
    var dispositivo = "test";

    notifiche.getNotifiche(codiceDispositivo,function(err,notifiche){
        if (err) {
            response = {"error": true, "message": err};
        } else {
            response = {"error":false,"data":notifiche};
        }
        res.json(response);
    });
});

module.exports = router;
