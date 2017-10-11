var dispositivi = module.exports;
var model = require('../models/dispositiviMnModel');

dispositivi.getDispositivo = function (filtro, callback) {
    var collection = model.database().collection('dispositivi');
    collection.find(filtro, function (err, dispositivo) {
        if (err)
            return callback(err);
        if (dispositivo != null) {
        }
        callback(null, dispositivo);
    });
};

dispositivi.update = function (id, dispositivo, callback) {
    var collection = model.database().collection('dispositivi');
    collection.update({_id: id}, dispositivo, {upsert: true}, function (error, element) {
        if (error) {
            callback(error, dispositivo);
        } else {
            collection.findOne({_id: id}, function (err, dispositivo) {
                if (err)
                    return callback(err);

                callback(null, dispositivo);
            });
        }
    });
};

