var mongoConnection = require('../../../config/mongoDB');
var dispositivomodel = module.exports;

dispositivomodel.databaseMongo = function (){
    return mongoConnection.get();
};

dispositivomodel.getLista = function (filtro, callback) {
    var collection_pub_dispositivi = dispositivomodel.databaseMongo().collection('pub_dispositivi');
    collection_pub_dispositivi.find(filtro).toArray(function (errore, lista) {
        if (errore)
            return callback(errore);
        else
            callback(null, lista);
    });
};

dispositivomodel.getAttivo = function (filtro, callback) {
    var collection_pub_dispositivi = dispositivomodel.databaseMongo().collection('pub_dispositivi');
    collection_pub_dispositivi.findOne(filtro,function (errore, lista) {
        if (errore)
            return callback(errore);
        else
            callback(null, lista);
    });
};

dispositivomodel.putAttivazione = function (myquery, newvalue ,callback) {
    var collection_pub_dispositivi = dispositivomodel.databaseMongo().collection('pub_dispositivi');
    collection_pub_dispositivi.updateOne(myquery, newvalue ,function (errore, lista) {
        if (errore)
            return callback(errore);
        else
            callback(null, lista);
    });
};