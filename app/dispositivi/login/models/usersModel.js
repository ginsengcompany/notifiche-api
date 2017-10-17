var mongoConnection = require('../../../../config/mongoDB');
var usersmodel = module.exports;

usersmodel.databaseMongo = function (){
    return mongoConnection.get();
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