var mongoConnection = require('../../../config/mongoDB');
var strutturaModel = module.exports;

strutturaModel.database = function (){
    return mongoConnection.get();
};

strutturaModel.getStruttura = function (filtro, callback) {
    var collection = strutturaModel.database().collection('struttura');
    collection.find(filtro).toArray(function (err, struttura) {
        if (err)
            return callback(err);
        if (struttura != null) {
            //user._doc.datiLogin = datiLogin;
        }
        callback(null, struttura);
    });
};