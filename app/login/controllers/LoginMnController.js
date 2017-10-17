var login = module.exports;
var model = require('../models/loginModel');

login.getLogin = function (filtro, callback) {
    model.getLogin(filtro, callback);
};

login.inserisciSession = function (session, callback) {
    model.inserisciSession(session, callback);
};

login.getValidate = function (callback) {
   model.getValidate(callback);
};

