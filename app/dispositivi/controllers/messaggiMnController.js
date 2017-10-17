var model = require('../models/messaggiMnModel');
var messaggiController = module.exports;

messaggiController.getMessaggi = function (filtro, callback) {
    model.getMessaggi(filtro, callback);
};

messaggiController.inserisciMessaggio = function (messaggio, callback) {
    model.inserisciMessaggio(messaggio, callback);
};

messaggiController.updateStato = function (id, stato, callback) {
    model.updateStato(id, stato, callback);
};