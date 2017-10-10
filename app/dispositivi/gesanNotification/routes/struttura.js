var express = require('express');
var router = express.Router();
var Struttura = require('../controllers/strutturaController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var filtro = "";
    Struttura.getStruttura(filtro, function (error, messaggi) {
        response = {"error": false, "data": messaggi};
        res.json(response);
    });
});

module.exports = router;
