var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/lifebox');
var Schema = mongoose.Schema;

var DspositiviSchema = new Schema({
    "idattivita": String,
    "codicedispositivo" : String, 
    "descrizionedispositivo" : String, 
    "titolo" : String, 
    "matricola" : String, 
    "cognome" : String, 
    "nome" : String, 
    "codiceunutaoperativa" : String, 
    "descrizioneunitaoperativa" : String, 
    "pin" : Number , 
    "tipo" : String , 
    "apikey" : String

}, {collection: 'dispositivi'});

module.exports = mongoose.model('dispositivi', DspositiviSchema);

