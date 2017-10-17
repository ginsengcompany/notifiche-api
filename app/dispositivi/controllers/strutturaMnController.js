var model = require('../models/strutturaMnModel');
var strutturaController = module.exports;

strutturaController.getStruttura = function (filtro, callback) {
    model.getStruttura(filtro, callback);
};