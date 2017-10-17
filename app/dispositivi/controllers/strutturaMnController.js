var struttura = module.exports;
var model = require('../models/strutturaMnModel');

struttura.getStruttura = function (filtro, callback) {
    var collection = model.database().collection('struttura');
    collection.find(filtro).toArray(function (err, struttura) {
        if (err)
            return callback(err);
        if (struttura != null) {
            //user._doc.datiLogin = datiLogin;
        }
        callback(null, struttura);
    });
};