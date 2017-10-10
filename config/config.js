var config = {};
config.dbmongo = {};
config.agenda = {};
config.utente = {paziente: {menu: null}};
//mongoose.connect('mongodb://localhost:27017/lifebox');
config.dbmongo.protocol = 'mongodb';
config.dbmongo.host = 'localhost';
config.dbmongo.port = '27017';
config.dbmongo.dbname = 'notifiche';

module.exports = config;


