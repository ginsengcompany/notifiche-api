var struttura = module.exports;
var model = require('../models/strutturaModel');

var StrutturaModel = model.model('struttura');

struttura.getStruttura = function (filtro, callback) {

    StrutturaModel.find({}, function (err, struttura) {
        if (err)
            return callback(err);
        if (struttura != null) {
            //user._doc.datiLogin = datiLogin;
        }

        callback(null, struttura);
    });

};

