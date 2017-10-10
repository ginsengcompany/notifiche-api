Ext.define('AdvaSoftLogin.view.utenti.UtentiView', {
    extend: 'Ext.container.Container',
    requires: [
//        'Ext.ux.layout.ResponsiveColumn',
        'AdvaSoftLogin.model.utenti.UtentiModel',
        'AdvaSoftLogin.controller.utenti.UtentiController',
        'AdvaSoftLogin.store.utenti.UtentiStore',
        'AdvaSoftLogin.model.utenti.UtentiViewModel'
    ],
    id: 'utenti',
    cls:'shadow-panel',
    controller: 'utenti',
    layout: 'fit',
    padding: '15 15 15 15',
    authToken: null,
    gridUtenti: null,
    listeners: {
        hide: 'onHideView'
    },
    viewModel: {
        type: 'utente'
    },
    constructor: function (params) {
        var me = this;
        me.authToken = params.authToken;
        me.routeId = params.routeId;
        me.callParent();
    },
    initComponent: function () {
        var me = this;
        var store = Ext.create('AdvaSoftLogin.store.utenti.UtentiStore',{authToken: me.authToken});
        me.gridUtenti = Ext.create('AdvaSoftLogin.view.utenti.GridUtentiView', {authToken: me.authToken, store: store}); //me.gridUtenti
        
        me.items = [{xtype: 'panel', layout: 'fit', autoHeight: true, items: [me.gridUtenti]}];

        me.callParent();
    },
    items: [
        {
            xtype: 'panel',
            title: 'Lista Utenti 1',
            responsiveCls: 'big-60 small-100'
        },
        {
            xtype: 'panel',
            html: 'Lista Utenti 2',
            responsiveCls: 'big-20 small-50'
        },
        {
            xtype: 'panel',
            html: 'Lista Utenti 3',
            responsiveCls: 'big-20 small-50'
        }
    ]
});

Ext.define('AdvaSoftLogin.view.utenti.GridUtentiView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridUserView',
    border: false,
    //controller: 'utenti',
    title: 'Lista Utenti',
    reference: 'gridUtenti',
    authToken: null,
    listeners: {
        select: 'onGridSelect'
    },
    headerBorders: false,
    rowLines: false,
    btnAddUser: null,
    constructor: function (params) {
        var me = this;
        me.authToken = params.authToken;
        me.store= params.store;
        me.callParent();
    },
    initComponent: function () {
        var me = this;
        me.callParent();
    },
    tools: [
        {
            xtype: 'tool',
            toggleValue: false,
            cls: 'x-fa fa-user-plus dashboard-tools',
            listeners: {
                click: 'onUserAdd'
            },
            width: 20,
            height: 20
        }
    ],
    columns: [
        {
            dataIndex: 'lastname',
            text: 'Cognome',
            flex: 1
        },
        {
            dataIndex: 'firstname',
            text: 'Nome',
            flex: 1
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex: 1
        },
        {
            dataIndex: 'email',
            text: 'Emal',
            flex: 1
        },
        {
            xtype: 'actioncolumn',
            width: 40,
            sortable: false,
            menuDisabled: true,
            items: [{
                    icon: 'themes/theme-custom/images/custom-icon/user_pencil.png',
                    tooltip: 'Modifica',
                    getClass: function (v, meta, record) {
                        return 'user-edit-cell';
                    },
                    handler: 'onEditUser'
                }]
        },
        {
            xtype: 'actioncolumn',
            width: 40,
            sortable: false,
            menuDisabled: true,
            items: [{
                    icon: 'themes/theme-custom/images/custom-icon/user_delete.png',
                    tooltip: 'Cancella',
                    getClass: function (v, meta, record) {
                        return 'user-edit-cell';
                    },
                    handler: 'onRemoveUser'
                }]
        }
    ]
});