Ext.define('AdvaSoftLogin.store.sessioni.SessioniStore', {
    extend: 'Ext.data.Store',
    alias: 'store.sessionistore',
    model: 'AdvaSoftLogin.model.sessioni.SessioniModel',
    authToken: null,
    autoLoad: true,
    autoSync: false,
    remoteSort: false, //true for server sorting
    sorters: [{
            property: 'expires',
            direction: 'DESC' // or 'ASC'
        }],
    proxy: {
        headers: {
            'Content-Type': 'application/json',
            //'Authorization': 'Bearer 25c3a5e5e0770b8f6b5078ccd2b4967dd1ca1a9a'
            //'Authorization': null
        },
        type: 'rest',
        pageParam: false, //to remove param "page"
        startParam: false, //to remove param "start"
        limitParam: false, //to remove param "limit"
        noCache: false, //to remove param "_dc"
        api: {
            create: 'rest/sessioni',
            read: 'rest/sessioni',
            update: 'rest/sessioni',
            destroy: 'rest/sessioni'
        },
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        reader: {
            type: 'json',
//            rootProperty: 'data'
        }
    },
    constructor: function (params) {
        var me = this;
        me.authToken = params.authToken; //'25c3a5e5e0770b8f6b5078ccd2b4967dd1ca1a9a';
        //me.model = Ext.create('AdvaSoftLogin.model.utenti.UtentiModel');
        me.callParent();
        me.proxy.headers.Authorization = 'Bearer ' + me.authToken;
    }
});



