var notifiche = module.exports;
var model = require('../models/notificheModel');
var objectAssign = require('object-assign');


var NotificheModel = model.model('notifiche');

notifiche.getNotifiche = function (filtro, callback) {
//    var a = {"dataorainvio": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}}
//    var a = {"dataorainvio": {"$gte": new Date('2016-03-25 00:00:00'), "$lt": new Date('2016-03-25 23:59:50')}};

    NotificheModel.find(filtro, function (err, notifica) {
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
        var notificheModel = new NotificheModel(notifica);
        notificheModel.save(callback);
    });

};

notifiche.deleteNotifica = function(id,callback){
    NotificheModel.remove({"idmessaggio":id},function(err, removed){
        if(err){
            callback(err);
        }
        
        callback(null,removed);
    });
};



