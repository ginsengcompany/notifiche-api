var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/lifebox');
var Schema = mongoose.Schema;

var MessaggiSchema = new Schema({
    "idattivita": String,
    "dataoraattivita": Date,
    "strutturadescrizione": String,
    "strutturacodice": String,
    "notificatipo": String, // EMAIL, SMS
    "notificadescrizione": String, // NOTIFICA LETTERA DIMISSIONE, NOTIFICA REFERTO...
    "notificaoggetto": String,
    "notificatesto": String,
    "notificaidreport": String,
    "dataorainvio": Date,
    "statoinvio": String, // INVIARE, NON INVIARE, INVIATA, REINVIARE
    "cognome": String,
    "nome": String,
    "datanascita": String,
    "sesso": String,
    "istatcomunenascita": String,
    "comunenascita": String,
    "dataricovero": String,
    "oraricovero": String,
    "datadimissione": String,
    "oradimissione": String,
    "destinatariomatricola": String,
    "autorenominativo": String,
    "autorematricola": String,
    "autoreordinemedici": String,
    "autoreuidesterno": String,
    "nominativotarget": String,
    "cognometarget": String,
    "nometarget": String,
    "linkdocumento": String,
    "codiceunitaoperativa": String,
    "unitaoperativa": String,
    "stato": Array

}, {collection: 'messaggi'});

module.exports = mongoose.model('messaggi', MessaggiSchema);

