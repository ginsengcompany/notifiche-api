var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/lifebox');
var Schema = mongoose.Schema;

var NotificheSchema = new Schema({
    "idattivita": String,
    "codicedispositivo" : String, 
    "descrizionedispositivo" : String, 
    "titolo" : String, 
    "matricola" : String, 
    "cognome" : String, 
    "nome" : String, 
    "codiceunutaoperativa" : String, 
    "descrizioneunitaoperativa" : String, 
    "pin" : String , 
    "apikey" : String,
    "idmessaggio": String,
    "dataora": Date

}, {collection: 'notifiche'});

module.exports = mongoose.model('notifiche', NotificheSchema);

