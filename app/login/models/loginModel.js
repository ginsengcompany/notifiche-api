var mongoConnection = require('../../../../config/mongoDB');
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

loginmodel.getValidate = function(callback){
    var collection_pub_session = loginmodel.databaseMongo().collection('pub_session');
    collection_pub_session.find().sort({'_id': -1}).limit(1).toArray(function (err, login) {
        if (err)
            return callback(err);
        if (login != null) {
        }
        callback(null, login);
    });
};