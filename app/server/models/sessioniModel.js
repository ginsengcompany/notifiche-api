var mongoConnection = require('../../../config/mongoDB');
var sessionimodel = module.exports;

sessionimodel.databaseMongo = function (){
    return mongoConnection.get();
};

sessionimodel.getLista = function (filtro, callback) {
    var collection_pub_session = sessionimodel.databaseMongo().collection('pub_session');
    collection_pub_session.find(filtro).toArray(function (errore, lista) {
        if (errore)
            return callback(errore);
        else
            callback(null, lista);
    });
};

sessionimodel.deleteSession = function (filtro, callback) {
    var collection_pub_session = sessionimodel.databaseMongo().collection('pub_session');
    collection_pub_session.deleteOne(filtro,function (errore, session) {
        if (errore)
            return callback(errore);
        else
            callback(null, session);
    });
};