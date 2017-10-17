var users = module.exports;
var model = require('../models/usersModel');

users.getUser = function (filtro, callback) {
    model.getUser(filtro, callback);
};
