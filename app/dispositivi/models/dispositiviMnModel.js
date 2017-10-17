// richiama il client di mongo db
var mongoConnection = require('../../../config/mongoDB');
var dispositiviModel = module.exports;

dispositiviModel.database = function (){
    return mongoConnection.get();
};

dispositiviModel.getDispositivo = function (filtro, callback) {
    var collection = dispositiviModel.database().collection('dispositivi');
    collection.find(filtro).toArray(function (err, dispositivo) {
        if (err)
            return callback(err);
        if (dispositivo != null) {
        }
        callback(null, dispositivo);
    });
};

dispositiviModel.update = function (id, dispositivo, callback) {
    var collection = dispositiviModel.database().collection('dispositivi');
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
}
