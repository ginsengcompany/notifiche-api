var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/lifebox');
var Schema = mongoose.Schema;

var StrutturaSchema = new Schema({
    "_id": String,
    "codicestruttura": String,
    "descrizionestruttura": String
}, {collection: 'struttura'});

module.exports = mongoose.model('struttura', StrutturaSchema);

