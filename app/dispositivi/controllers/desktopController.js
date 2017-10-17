var desktop = module.exports;
//var models = require('../models/notificheModel');

desktop.send = function (message, clientsapi, callback) {
    console.log(message);
    console.log(clientsapi);
    callback({"ciao":"sisto"}, clientsapi);
};


