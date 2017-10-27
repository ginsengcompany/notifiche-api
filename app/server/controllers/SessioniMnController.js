var session = module.exports;
var model = require('../models/sessioniModel');

session.getLista = function (filtro, callback) {
    model.getLista(filtro, callback);
};

session.deleteSession = function (filtro, callback) {
    model.deleteSession(filtro, callback);
};