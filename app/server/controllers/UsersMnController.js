var users = module.exports;
var model = require('../models/usersModel');

users.getLista = function (filtro, callback) {
    model.getLista(filtro, callback);
};

users.getUser = function (filtro, callback) {
    model.getUser(filtro, callback);
};
