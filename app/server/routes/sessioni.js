var express = require('express');
var router = express.Router();
var sessioni = require('../controllers/SessioniMnController');


router.get('/', function (req, res, next) {
    var filtro = {};
    var response = {};
    sessioni.getLista(filtro ,function (error, sessioni) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = sessioni;
            res.json(response);
        }

    });
});

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;
    var filtro = {"access_token":id};
    sessioni.deleteSession(filtro ,function (error, sessioni) {
        if (error) {
            response = {"error": true, "status": 401};
            res.json(response);
        }
        else{
            response = sessioni;
            res.json(response);
        }

    });
});


module.exports = router;