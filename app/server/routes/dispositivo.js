var express = require('express');
var router = express.Router();
var dispositivo = require('../controllers/DispositivoMnController');

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
    var id = req.params._id;
    var myquery = { "primaryKey": id };

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
                    }

                });

            }
        }

    });

});

module.exports = router;