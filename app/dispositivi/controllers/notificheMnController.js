var notifiche = module.exports;
var model = require('../models/notificheMnModel');
var objectAssign = require('object-assign');

notifiche.getNotifiche = function (filtro, callback) {
//    var a = {"dataorainvio": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}}
//    var a = {"dataorainvio": {"$gte": new Date('2016-03-25 00:00:00'), "$lt": new Date('2016-03-25 23:59:50')}};

    var collection = model.database().collection('notifiche');
    collection.find(filtro, function (err, notifica) {
        if (err)
            return callback(err);
        if (notifica != null) {
            //user._doc.datiLogin = datiLogin;
        }
        callback(null, notifica);
    });

};

notifiche.addNotifica = function (message, dispositivi, callback) {
    var notifica = {};
    dispositivi.forEach(function (dispositivo) {
        notifica = {"codicedispositivo": dispositivo,
            "titolo": message.notificaoggetto,
            "dataora": new Date(),
            "idmessaggio": message._id
        };
        var collection = model.database().collection('notifiche');
        collection.insertOne(notifica,callback);
    });
};

notifiche.deleteNotifica = function(id,callback){
    var collection = model.database().collection('notifiche');
    collection.deleteOne({"idmessaggio":id},callback);
};