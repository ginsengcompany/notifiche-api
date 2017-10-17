// richiama il client di mongo db
var mongoConnection = require('../../../config/mongoDB');

exports.database = function (){
    return mongoConnection.get();
};

/*var Schema = mongoose.Schema;

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
*/

