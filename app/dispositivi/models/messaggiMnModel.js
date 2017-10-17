var mongoConnection = require('../../../config/mongoDB');
var messaggiModel = module.exports;

messaggiModel.database = function (){
    return mongoConnection.get();
};

messaggiModel.getMessaggi = function (filtro, callback) {
    //    var a = {"dataorainvio": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}}
    //    var a = {"dataorainvio": {"$gte": new Date('2016-03-25 00:00:00'), "$lt": new Date('2016-03-25 23:59:50')}};
    var collection = messaggiModel.database().collection('messaggi');
    collection.find(filtro).toArray(function (err, messaggi) {
        if (err)
            return callback(err);
        if (messaggi != null) {
            //user._doc.datiLogin = datiLogin;
        }
        callback(null, messaggi);
    });
};

messaggiModel.inserisciMessaggio = function (messaggio, callback) {
    var collection = messaggiModel.database().collection('messaggi');
    collection.insertOne(messaggio,callback);
};

messaggiModel.updateStato = function (id, stato, callback) {
    var collection = messaggiModel.database().collection('messaggi');
    collection.find({_id: id}, function (err, messaggio) {
        if (err)
            return callback(err);
        if(messaggio.stato.length !== 0){
            var esiste = false;
            messaggio.stato.forEach(function(entry, index, theArray) {
                if(entry.matricola === stato.matricola){
                    esiste = true;
                    theArray[index] = objectAssign(entry, stato);
                }
            });
            if(!esiste){
                messaggio.stato.push(stato);
            }
        }
        else{
            messaggio.stato.push(stato);
        }
        collection.updateOne({_id: id}, messaggio, {upsert: true}, function (error, element) {
            if (error) {
                callback(error, messaggio);
            } else {
                collection.find({_id: id}, function (err, messaggio) {
                    if (err)
                        return callback(err);
                    callback(null, messaggio);
                });
            }
        });
    });
}
