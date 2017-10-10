var express = require('express');
var gcm = require('node-gcm');
var router = express.Router();
var Messaggi = require('../controllers/messaggiController');

/* GET users listing. */
router.get('/', function (req, res, next) {
    var response = {};
    var params = req.query;
    var filtro = "";
    Messaggi.getMessaggi(filtro, function (error, messaggi) {
        response = {"error": false, "data": messaggi};
        res.json(response);
    });
});

/* PUT users listing. */
//router.put('/:id', function (req, res, next) {
//    var id = req.params.id;
//    var response = {};
//    var messaggio = req.body;
//    messaggio.dataLettura = new Date();
//    Messaggi.update(id, messaggio, function (err, data) {
//        if (err) {
//            response = {"error": true, "message": err};
//        } else {
//            response = {"error": false, "message": data};
//        }
//        res.json(response);
//    });
//});
/* PUT users listing. */
router.post('/', function (req, res, next) {

    var id = req.params.id;
    var response = {};
    var messaggio = req.body;
    var notifica = new Object();

//    message.addData('hello', 'world');
//    message.addNotification('title', 'Hello');
//    message.addNotification('icon', 'ic_launcher');
//    message.addNotification('body', 'World');
    //var regTokens = ['APA91bGGx97VxU-WsW5-5N6kAkELxGYz2rAiiPAIfWiKXbvonaFhs52KhV1OwZhB606cqqPlN83EH1MQFF3AmExQqDCZGZsL7jTFH4KDvp-1xY10sgknF0hEW9J7ZEfMBnqziQaIc-ZvyAjfwrRf53rd1u6dGevfcwkFntwbdIWb9cZ39Cd-8r8'];
    var regTokens = ['APA91bFb1ZnVHeCaLgI5FrRdNCTPPQEEopKCZQNwXIJNn5LnUmUn5R_aCX4yKZ4eAZay53IL-WDVxmcG_A7BAq8Z8aKSghSs_dC3UOpWf8OXrK41ERODt5zszEy0pZUvuYwSqDI8r2GI'];
    var sender = new gcm.Sender('AIzaSyDwcsLvG_bwNMNbPidfAEQe2rdDbD0tFto');
//    notifica.registration_id = "APA91bGGx97VxU-WsW5-5N6kAkELxGYz2rAiiPAIfWiKXbvonaFhs52KhV1OwZhB606cqqPlN83EH1MQFF3AmExQqDCZGZsL7jTFH4KDvp-1xY10sgknF0hEW9J7ZEfMBnqziQaIc-ZvyAjfwrRf53rd1u6dGevfcwkFntwbdIWb9cZ39Cd-8r8";
    notifica.messaggio = "Referto di Radiologia presente nella U.O. PS [9999] del paziente AMALIA RANCHETTI";
    notifica.dataInvio = new Date();
    notifica.documento = "http://172.20.145.14/wirgilio/refertipdf/NP1241635I1315303P0.pdf";
    notifica.projectname = "WorkFlowNotification";
    notifica.stato = "Notificato";
    var message = new gcm.Message(notifica);
//    message.addData({documento:"sisto"});
//    message.addData({message:"Referto di Radiologia presente nella U.O. PS [9999] del paziente AMALIA RANCHETTI"});
//    message.addData({dataInvio:new Date()});
    message.addData({
        dataInvio:new Date(),
        documento:"http://172.20.145.14/wirgilio/refertipdf/NP1241635I1315303P0.pdf",
        message:"Referto di Radiologia presente nella U.O. PS [9999] del paziente AMALIA RANCHETTI"
    });
//    message.addData({documento:"sisto"});
//    var message = new gcm.Message({
//        collapseKey: 'demo',
//        priority: 'high',
//        contentAvailable: true,
//        delayWhileIdle: true,
//        timeToLive: 3,
//        restrictedPackageName: "somePackageName",
//        dryRun: true,
//        data: {
//            key1: 'message1',
//            key2: 'message2'
//        },
//        notification: {
//            title: "Hello, World",
//            icon: "ic_launcher",
//            body: "This is a notification that will be displayed ASAP."
//        }
//    });
    sender.send(message, regTokens, function (err, response) {
        if (err) {
            console.error(err);
        } else {
            console.log(response);
        }
    });
//    notifica.registration_id = "APA91bGGx97VxU-WsW5-5N6kAkELxGYz2rAiiPAIfWiKXbvonaFhs52KhV1OwZhB606cqqPlN83EH1MQFF3AmExQqDCZGZsL7jTFH4KDvp-1xY10sgknF0hEW9J7ZEfMBnqziQaIc-ZvyAjfwrRf53rd1u6dGevfcwkFntwbdIWb9cZ39Cd-8r8";
//    notifica.messaggio = "Referto di Radiologia presente nella U.O. PS [9999] del paziente AMALIA RANCHETTI";
//    notifica.dataInvio = new Date();
//    notifica.documento = "http://172.20.145.14/wirgilio/refertipdf/NP1241635I1315303P0.pdf";
//    notifica.projectname = "WorkFlowNotification";
//    notifica.stato = "Notificato";
//    response = {"error": true, "message": notifica};
////    res.json(response);
//    gcm.send(notifica, function (err, messageId) {
//        if (err) {
//            console.log("Something has gone wrong!");
//        } else {
//            console.log("Sent with message ID: ", messageId);
//        }
//    });
    res.json(response);
//    Messaggi.update(id, messaggio, function (err, data) {
//        if (err) {
//            response = {"error": true, "message": err};
//        } else {
//            response = {"error": false, "message": data};
//        }
//        res.json(response);
//    });
});
module.exports = router;
