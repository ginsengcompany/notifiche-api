var express = require('express');
var router = express.Router();
var Struttura = require('../controllers/strutturaMnController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var filtro = params;
    Struttura.getStruttura({}, function (error, messaggi) {
        response = {"error": false, "data": messaggi};
        res.json(response);
    });
});

module.exports = router;
