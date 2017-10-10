var dispositivi = module.exports;
var model = require('../models/dispositiviModel');

var DispositiviModel = model.model('dispositivi');

dispositivi.getDispositivo = function (filtro, callback) {

    DispositiviModel.find(filtro, function (err, dispositivo) {
        if (err)
            return callback(err);
        if (dispositivo != null) {
            //user._doc.datiLogin = datiLogin;
        }

        callback(null, dispositivo);
    });

};

dispositivi.update = function (id, dispositivo, callback) {
    DispositiviModel.update({_id: id}, dispositivo, {upsert: true}, function (error, element) {
        if (error) {
            callback(error, dispositivo);
        } else {
            DispositiviModel.findOne({_id: id}, function (err, dispositivo) {
                if (err)
                    return callback(err);

                callback(null, dispositivo);
            });
        }

    });
};

