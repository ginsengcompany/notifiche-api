var mongoConnection = require('../../../config/mongoDB');
var loginmodel = module.exports;

loginmodel.databaseMongo = function (){
    return mongoConnection.get();
};

loginmodel.getLogin = function (filtro, callback) {
    var collection_pub_utenti = loginmodel.databaseMongo().collection('pub_utenti');
    collection_pub_utenti.findOne(filtro,function (err, login) {
        if (err)
            return callback(err);
        if (login != null) {
        }
        callback(null, login);
      });
};

loginmodel.inserisciSession = function(session, callback){
    var collection_pub_session = loginmodel.databaseMongo().collection('pub_session');
    collection_pub_session.insertOne(session,callback);
};

loginmodel.inserisciDispositivo = function(session, callback){
    var collection_pub_session = loginmodel.databaseMongo().collection('pub_dispositivi');
    collection_pub_session.insertOne(session,callback);
};

loginmodel.getSessione = function (filtro, callback) {
    var collection_pub_utenti = loginmodel.databaseMongo().collection('pub_session');
    collection_pub_utenti.find(filtro).toArray(function (err, login) {
        if (err) return callback(err);
        callback(null, login);
    });
};

loginmodel.aggiornaSessione = function (myquery, newvalue ,callback) {
    var collection_pub_session = loginmodel.databaseMongo().collection('pub_session');
    collection_pub_session.updateOne(myquery, newvalue ,function (errore, lista) {
        if (errore)
            return callback(errore);
        else
            callback(null, lista);
    });
};

loginmodel.getValidate = function(callback){
    var collection_pub_session = loginmodel.databaseMongo().collection('pub_session');
    collection_pub_session.find().toArray(function (err, login) {
        if (err)
            return callback(err);
        if (login != null) {
        }
        callback(null, login);
    });
};