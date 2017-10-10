Ext.define('AdvaSoftLogin.model.utenti.UtentiModel', {
    extend: 'Ext.data.Model',
    idProperty: '_id',
    fields: [
        {name: '_id', persist: false},
        {name: 'image'},
        {name: 'lastname'},
        {name: 'firstname'},
        {name: 'password'},
        {name: 'username'},
        {name: 'email'},
        {name: 'clientId'},
        {name: 'clientSecret'}
    ],
    proxy: {
        headers: {
            'Content-Type': 'application/json',
//            'Authorization': 'Bearer ' + gridUtenti.authToken
//            'Authorization': null
        },
        type: 'rest',
        url: '/users'
    }
});