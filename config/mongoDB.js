'use strict';
var config = require('./config');
var MongoClient = require('mongodb').MongoClient;

var state = {
    db : null
}

exports.connect = function (done) {
    var url = config.dbmongo.protocol + '://' + config.dbmongo.host + ':' + config.dbmongo.port + '/' + config.dbmongo.dbname;
    if (state.db)
        return done();
    MongoClient.connect(url,function (err, db) {
        if (err)
            return done(err);
        state.db = db;
        console.log('Connessione riuscita')
        done();
    })
}

exports.get = function () {
    return state.db;
}

exports.close = function () {
    if (state.db) {
        state.db.close(function (err,result) {
            state.db = null;
            state.mode = null;
        })
    }
}
