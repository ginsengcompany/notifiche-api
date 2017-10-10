Ext.define('AdvaSoftLogin.view.sessioni.SessioniView', {
    extend: 'Ext.container.Container',
    requires: [
        'AdvaSoftLogin.model.sessioni.SessioniModel',
        'AdvaSoftLogin.controller.sessioni.SessioniController',
        'AdvaSoftLogin.store.sessioni.SessioniStore',
//        'AdvaSoftLogin.model.sessioni.SessioniViewModel'
    ],
    id: 'sessioni',
    cls:'shadow-panel',
    controller: 'sessioni',
    layout: 'fit',
    padding: '15 15 15 15',
    authToken: null,
    gridSessioni: null,
    hideMode: 'offsets',
    listeners: {
        hide: 'onHideView'
    },
//    viewModel: {
//        type: 'sessioni'
//    },
    constructor: function (params) {
        var me = this;
        me.authToken = params.authToken;
        me.routeId = params.routeId;
        me.callParent();
    },
    initComponent: function () {
        var me = this;
        var store = Ext.create('AdvaSoftLogin.store.sessioni.SessioniStore',{authToken: me.authToken});
        me.gridSessioni = Ext.create('AdvaSoftLogin.view.sessioni.GridSessioniView', {authToken: me.authToken, store: store}); //me.gridUtenti
        
        me.items = [{xtype: 'panel', layout: 'fit', autoHeight: true, items: [me.gridSessioni]}];

        me.callParent();
    }
//    items: [{xtype:'panel', title:'prova'}]
});

Ext.define('AdvaSoftLogin.view.sessioni.GridSessioniView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridUserView',
    border: false,
    title: 'Lista Sessioni',
    reference: 'gridSessioni',
    authToken: null,
    listeners: {
        //select: 'onGridSelect'
    },
    headerBorders: false,
    rowLines: false,
    btnAddUser: null,
    constructor: function (params) {
        var me = this;
        me.routeId = params.routeId;
        me.authToken = params.authToken;
        me.store= params.store;
        me.callParent();
    },
    initComponent: function () {
        var me = this;
        me.callParent();
    },
//    tools: [
//        {
//            xtype: 'tool',
//            toggleValue: false,
//            cls: 'x-fa fa-user-plus dashboard-tools',
//            listeners: {
//                click: 'onUserAdd'
//            },
//            width: 20,
//            height: 20
//        }
//    ],
    columns: [
        {
            dataIndex: 'accessToken',
            text: 'Token',
            flex: 1
        },
        {
            dataIndex: 'clientId',
            text: 'Client Id',
            width: 100
        },
        {
            dataIndex: 'username',
            text: 'Utente',
            flex: 1
        },
        {
            xtype: 'datecolumn',
            format: 'd-m-Y H:i:s',
            text: 'Scadenza',
            width: 150,
            dataIndex: 'expiresToken'          
        },
        {
//            xtype: 'actioncolumn',
            text: 'Stato',
            width: 80,
            sortable: false,
            menuDisabled: true,
            renderer: function(value, meta, record, rowIndex, colIndex, store) {
                var returnValue = "Attiva";
                //var durataSessione = 3600000; <- in millisecondi
                var dataScadenza = Ext.Date.add(new Date(), Ext.Date.SECOND, -3600);
                if(record.get('expiresToken').getTime() < dataScadenza.getTime()){
                    meta.tdCls = 'red-font';
                    returnValue = "Scaduta";
                }
                else{
                    meta.tdCls = 'green-font';
                    returnValue = "Attiva";                    
                }
                return returnValue;
            },            
            items: [{
                    getClass: function (v, meta, record) {
                        return 'user-edit-cell';
                    }
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
                    handler: 'onRemoveSession'
                }]
        }
    ]
});