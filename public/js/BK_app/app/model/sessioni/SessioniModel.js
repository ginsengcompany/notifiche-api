Ext.define('AdvaSoftLogin.model.sessioni.SessioniModel', {
    extend: 'Ext.data.Model',
    idProperty: 'accessToken',
    fields: [
        {name: 'accessToken', persist: false},
        {name: 'clientId'},
        {name: 'username'},
        {name: 'expiresToken', type: 'date', dateFormat: 'time'}
    ]
});