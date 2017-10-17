var model = require('../models/notificheMnModel');
var notificheController = module.exports;

notificheController.getNotifiche = function (filtro, callback) {
    model.getNotifiche(filtro, callback);
};

notificheController.addNotifica = function (message, dispositivi, callback) {
    model.addNotifica(message, dispositivi, callback);
};

notificheController.deleteNotifica = function(id,callback){
    model.deleteNotifica(id,callback)
};