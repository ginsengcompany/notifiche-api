var login = module.exports;
var model = require('../models/loginModel');

login.getLogin = function (filtro, callback) {
    model.getLogin(filtro, callback);
};

login.inserisciSession = function (session, callback) {
    model.inserisciSession(session, callback);
};

login.inserisciDispositivo = function (session, callback) {
    model.inserisciDispositivo(session, callback);
};

login.getSessione = function (filtro, callback) {
    model.getSessione(filtro, callback);
};

login.aggiornaSessione = function (myquery, newvalue ,callback) {
    model.aggiornaSessione(myquery, newvalue ,callback);
};

login.getValidate = function (callback) {
   model.getValidate(callback);
};

