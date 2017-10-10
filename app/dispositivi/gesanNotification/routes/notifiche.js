var express = require('express');
var router = express.Router();
var notifiche = require('../controllers/notificheController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var codiceDispositivo = params.codicedispositivo;
    var dispositivo = "test";
    /*
     * var response = {"error": false, "data": params};
    */
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
