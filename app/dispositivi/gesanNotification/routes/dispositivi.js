var express = require('express');
var router = express.Router();
var Dispositivi = require('../controllers/dispositiviController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var filtro = params;
    if(params.operazione === undefined){
        filtro = params;
    }
    else if(params.operazione === "registrazione"){
        filtro = {matricola: params.matricola, pin: params.pin, apikey: null};
    }
    Dispositivi.getDispositivo(filtro, function (error, dispositivo) {
        response = {"error": false, "data": dispositivo};
        res.json(response);
    });
});

/* PUT users listing. */
router.put('/', function (req, res, next) {
    var id = req.params.id;
    var response = {};
    var filtro = {matricola: req.body.matricola, pin: req.body.pin, apikey: null};
    var apiKey = req.body.apikey;
    var tipo = req.body.tipo;
    Dispositivi.getDispositivo(filtro, function (error, dispositivo) {
        if (dispositivo.length !== 1) {
            response = {"error": true, "messaggio": "Dispositivo non trovato", tmp: dispositivo};
            res.json(response);
        } else {
            var dispositivoMedico = dispositivo[0];
            dispositivoMedico.tipo = tipo;
            dispositivoMedico.apikey = apiKey;
            response = {"error": false, "data": dispositivoMedico};
            Dispositivi.update(dispositivoMedico._id, dispositivoMedico, function (err, data) {
                if (err) {
                    response = {"error": true, "message": err};
                } else {
                    response = {"error": false, "data": data};
                }
                res.json(response);
            });
        }
    });
//    messaggio.dataLettura = new Date();
//    Dispositivi.update(id, messaggio, function (err, data) {
//        if (err) {
//            response = {"error": true, "message": err};
//        } else {
//            response = {"error": false, "message": data};
//        }
//        res.json(response);
//    });
});

router.put('/:id', function (req, res, next) {
    var id = req.params.id;
    var response = {};
    var dispositivo = req.body;
//    var response = {"error": false, "data": dispositivo};
//    res.json(response);
    Dispositivi.update(id, dispositivo, function (err, data) {
        if (err) {
            response = {"error": true, "message": err};
        } else {
            response = {"error": false, "data": data};
        }
        res.json(response);
    });
});

module.exports = router;
