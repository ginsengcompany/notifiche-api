var mongoConnection = require('../../../config/mongoDB');

exports.database = function (){
    return mongoConnection.get();
};