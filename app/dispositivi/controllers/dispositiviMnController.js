var model = require('../models/dispositiviMnModel');
var dispositiviController = module.exports;

dispositiviController.getDispositivo = function (filtro, callback) {
    model.getDispositivo(filtro, callback);
};

dispositiviController.update = function (id, dispositivo, callback) {
    model.update(id, dispositivo, callback);
};

