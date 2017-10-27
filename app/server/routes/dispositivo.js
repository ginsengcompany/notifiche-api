var express = require('express');
var router = express.Router();
var dispositivo = require('../controllers/DispositivoMnController');
var ObjectID = require('mongodb').ObjectID;
var gcm = require('node-gcm');

router.get('/', function (req, res, next) {
    var filtro = {};
    var response = {};
    dispositivo.getLista(filtro ,function (error, dispositivo) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = dispositivo;
            res.json(response);
        }

    });
});

router.put('/attivazione/:id', function (req, res, next) {
    var token = req.headers.data;
    var id = req.params.id;
    var objectId = new ObjectID(id);
    var myquery  = {"_id":objectId};

    dispositivo.getAttivo(myquery ,function (error, device) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = device.attivo;
            if(response === true){

                dispositivo.putAttivazione(myquery ,{$set:{"attivo": false}},function (error, device) {
                    if (error) {
                        response1 = {"error": true, "status": 401};
                        res.json(response1);
                    }
                    else{
                        response1 = device;
                        res.json(response1);

                        var message = new gcm.Message();

                        message.addData('operazione', 'disattivaDispositivo');
                        message.addNotification('title', 'Dispositivo Disattivato');
                        message.addNotification('vibrate', 1);
                        message.addNotification('sound', 'default');
                        message.addNotification('icon', 'ic_launcher');
                        message.addNotification('body', 'Sei stato Disattivato');


                        var regTokens = [token];

                        var sender = new gcm.Sender('AIzaSyDwcsLvG_bwNMNbPidfAEQe2rdDbD0tFto');

                        sender.send(message, regTokens, function (err, response) {
                            if(err) {
                                console.error(err);
                            } else {
                                console.log(response);
                            }
                        });

                    }

                });

            }else if(response === false){

                dispositivo.putAttivazione(myquery ,{$set:{"attivo": true}},function (error, device) {
                    if (error) {
                        response2 = {"error": true, "status": 401};
                        res.json(response2);
                    }
                    else{
                        response2 = device;
                        res.json(response2);

                        var message = new gcm.Message();

                        message.addData('operazione', 'attivaDispositivo');
                        message.addNotification('title', 'Dispositivo Attivato');
                        message.addNotification('vibrate', 1);
                        message.addNotification('sound', 'default');
                        message.addNotification('icon', 'ic_launcher');
                        message.addNotification('body', 'Sei stato Attivato');


                        var regTokens = [token];

                        var sender = new gcm.Sender('AIzaSyDwcsLvG_bwNMNbPidfAEQe2rdDbD0tFto');

                        sender.send(message, regTokens, function (err, response) {
                            if(err) {
                                console.error(err);
                            } else {
                                console.log(response);
                            }
                        });
                    }

                });

            }
        }

    });

});

module.exports = router;