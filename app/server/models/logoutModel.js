var mongoConnection = require('../../../config/mongoDB');
var logoutmodel = module.exports;

logoutmodel.databaseMongo = function (){
    return mongoConnection.get();
};

logoutmodel.getValidate = function(callback){
    var collection_pub_session = logoutmodel.databaseMongo().collection('pub_session');
    collection_pub_session.find().toArray(function (err, login) {
        if (err)
            return callback(err);
        if (login != null) {
        }
        callback(null, login);
    });
};