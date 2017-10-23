var dispositivo = module.exports;
var model = require('../models/dispositivoModel');

dispositivo.getLista = function (filtro, callback) {
    model.getLista(filtro, callback);
};

dispositivo.getAttivo = function (filtro, callback) {
    model.getAttivo(filtro, callback);
};

dispositivo.putAttivazione = function (myquery, newvalue, callback) {
    model.putAttivazione(myquery, newvalue, callback);
};
