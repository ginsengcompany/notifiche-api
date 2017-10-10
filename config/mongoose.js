'use strict';
var config = require('./config');
var mongoose = require('mongoose');


function createConnectionMongoose(app){
    mongoose.connect(config.dbmongo.protocol + '://' + config.dbmongo.host + ':' + config.dbmongo.port + '/' + config.dbmongo.dbname);
}

module.exports = function(app) {
    return createConnectionMongoose(app);
};

