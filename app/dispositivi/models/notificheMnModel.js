var mongoConnection = require('../../../config/mongoDB');
var notificheModel = module.exports;

notificheModel.database = function (){
    return mongoConnection.get();
};

notificheModel.getNotifiche = function (filtro, callback) {
//    var a = {"dataorainvio": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}}
//    var a = {"dataorainvio": {"$gte": new Date('2016-03-25 00:00:00'), "$lt": new Date('2016-03-25 23:59:50')}};
    var collection = notificheModel.database().collection('notifiche');
    collection.find(filtro).toArray(function (err, notifica) {
        if (err)
            return callback(err);
        if (notifica != null) {
            //user._doc.datiLogin = datiLogin;
        }
        callback(null, notifica);
    });
};

notificheModel.addNotifica = function (message, dispositivi, callback) {
    var notifica = {};
    dispositivi.forEach(function (dispositivo) {
        notifica = {"codicedispositivo": dispositivo,
            "titolo": message.notificaoggetto,
            "dataora": new Date(),
            "idmessaggio": message._id
        };
        var collection = notificheModel.database().collection('notifiche');
        collection.insertOne(notifica,callback);
    });
};

notificheModel.deleteNotifica = function(id,callback){
    var collection = notificheModel.database().collection('notifiche');
    collection.deleteOne({"idmessaggio":id},callback);
};