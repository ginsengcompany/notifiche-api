var express = require('express');
var gcm = require('node-gcm');
var router = express.Router();
var Messaggi = require('../controllers/messaggiMnController');
var Dispositivi = require('../controllers/dispositiviMnController');
var Notifiche = require('../controllers/notificheMnController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var data = new Date(params.dataorainvio);
    if (data === 'Invalid Date') {
        //filtro = {"dataorainvio": {"$gte": new Date(params.dataorainvio + ' 00:00:00'), "$lt": new Date(params.dataorainvio + ' 23:59:50')}};
    } else {
        if (params.codiceunitaoperativa !== "null" && params.matricola !== "null") {
            filtro = {
                "dataorainvio": {"$gte": new Date(params.dataorainvio + ' 00:00:00.000Z'), "$lt": new Date(params.dataorainvio + ' 23:59:59.000Z')},
                $or: [{"codiceunitaoperativa": params.codiceunitaoperativa}, {matricola: params.matricola}]
            };
        } else if (params.codiceunitaoperativa !== "null") {
            filtro = {"dataorainvio": {"$gte": new Date(params.dataorainvio + ' 00:00:00.000Z'), "$lt": new Date(params.dataorainvio + ' 23:59:59.000Z')}, codiceunitaoperativa: params.codiceunitaoperativa};
        } else if (params.destinatariomatricola !== undefined) {
            //filtro = {"dataorainvio": {"$gte": new Date(params.dataorainvio + ' 00:00:00'), "$lt": new Date(params.dataorainvio + ' 23:59:50')}, destinatariomatricola: params.destinatariomatricola};
            filtro = {destinatariomatricola: params.destinatariomatricola};
        } else {
            filtro = {"dataorainvio": {"$gte": new Date(params.dataorainvio + ' 00:00:00.000Z'), "$lt": new Date(params.dataorainvio + ' 23:59:59.000Z')}};
        }
    }
    Messaggi.getMessaggi(filtro, function (error, messaggi) {
        response = {"error": false, "data": messaggi};
        res.json(response);
    });
});

/* PUT users listing. */
router.put('/:id/letto', function (req, res, next) {
    var id = req.params.id;
    var response = {};
    var stato = req.body;
    stato.letto = new Date();
    Messaggi.updateStato(id, stato, function (err, data) {
        if (err) {
            response = {"error": true, "message": err};
        } else {
            response = {"error": false, "message": data};
        }
        res.json(response);
    });
});

/* PUT users listing. */
router.put('/:id/notificato', function (req, res, next) {
    var id = req.params.id;
    var response = {};
    var stato = req.body;
    stato.notificato = new Date();
    Messaggi.updateStato(id, stato, function (err, data) {
        if (err) {
            response = {"error": true, "message": err};
        } else {
            response = {"error": false, "message": data};
        }
        Notifiche.deleteNotifica(id, function (err,data) {

        });
        res.json(response);
    });
});

/* PUT users listing. */
router.put('/:id/cancella', function (req, res, next) {
    var id = req.params.id;
    var response = {};
    var stato = req.body;
    stato.cancellato = new Date();
    Messaggi.updateStato(id, stato, function (err, data) {
        if (err) {
            response = {"error": true, "message": err};
        } else {
            response = {"error": false, "message": data};
        }
        res.json(response);
    });
});

/* POST users listing. */
router.post('/', function (req, res, next) {
    //"codiceunitaoperativa": "9999",
    var id = req.params.id;
    var response = {};
    var messaggio = req.body;
    var notifica = new Object();
    var regTokens = new Array();
    var desktopNotifiche = new Array();
    if ((messaggio.codiceunitaoperativa === null || messaggio.codiceunitaoperativa === undefined) && (messaggio.destinatariomatricola === null || messaggio.destinatariomatricola === undefined)) {
        response = {"error": true, "message": "manca il campo codiceunitaoperativa e/o destinatariomatricola"};
        res.json(response);
    } else {
        var filtroDispositivi = {codiceunitaoperativa: messaggio.codiceunitaoperativa};
        if (messaggio.destinatariomatricola !== null) {
            filtroDispositivi = {matricola: messaggio.destinatariomatricola};
        }
//        else{
//            filtroDispositivi = {codiceunitaoperativa: messaggio.codiceunitaoperativa};
//        }
        Dispositivi.getDispositivo(filtroDispositivi, function (error, dispositivi) {
            dispositivi.forEach(function (dispositivo) {

                if (dispositivo.apikey !== undefined) {
                    regTokens.push(dispositivo.apikey);
                } else if (dispositivo.tipo === "desktop") {
                    desktopNotifiche.push(dispositivo.codicedispositivo);
                }
            });
            messaggio.dataorainvio = new Date();
            Messaggi.inserisciMessaggio(messaggio, function (err, data) {
                if (err) {
                    response = {"error": true, "message": err};
                } else {
                    if (regTokens.length > 0) {
                        var sender = new gcm.Sender('AIzaSyDwcsLvG_bwNMNbPidfAEQe2rdDbD0tFto');
                        var message = new gcm.Message(notifica);
                        message.addData({
                            dataInvio: data.datainvio,
                            documento: data.linkdocumento,
                            message: data.notificatesto,
                            id: data._id
                        });
                        sender.send(message, regTokens, function (err, response) {
                            if (err) {
                                response = {"error": true, "message": error};
                            } else {
                                data.esitonotifica = response;
                                response = {"error": false, "data": data};
                            }
                            //res.json(response);
                        });
                    } else {
                        response = {"error": false, "data": data};
//                        res.json(response);

                    }
                    if (desktopNotifiche.length > 0) {
                        console.log(data);
                        Notifiche.addNotifica(data, desktopNotifiche, function (err, data) {
                            if (err) {
                                response = {"error": true, "message": err};
                            } else {
                                //
                            }
//                            res.json(response);
                        });
                    }
                    response = {"error": false, "message": data};
                    res.json(response);
                }

            });
        });
    }
});

module.exports = router;
