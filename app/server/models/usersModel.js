var mongoConnection = require('../../../config/mongoDB');
var usersmodel = module.exports;

usersmodel.databaseMongo = function (){
    return mongoConnection.get();
};

usersmodel.getLista = function (filtro, callback) {
    var collection_pub_utenti = usersmodel.databaseMongo().collection('pub_utenti');
    collection_pub_utenti.find(filtro).toArray(function (errore, lista) {
        if (errore)
            return callback(errore);
        else
        callback(null, lista);
    });
};

usersmodel.getUser = function (filtro, callback) {
    var collection_pub_utenti = usersmodel.databaseMongo().collection('pub_utenti');
    collection_pub_utenti.findOne(filtro,function (err, utente) {
        if (err)
            return callback(err);
        if (utente != null) {
        }
        callback(null, utente);
    });
};

usersmodel.updateUtente = function (myquery, newvalue ,callback) {
    var collection_pub_utenti = usersmodel.databaseMongo().collection('pub_utenti');
    collection_pub_utenti.updateOne(myquery, newvalue ,function (errore, lista) {
        if (errore)
            return callback(errore);
        else
            callback(null, lista);
    });
};

usersmodel.inserisciUtente = function(utente, callback){
    var collection_pub_utenti = usersmodel.databaseMongo().collection('pub_utenti');
    collection_pub_utenti.insertOne(utente,callback);
};