Ext.define('AdvaSoftLogin.view.dashboard.DashboardView', {
    extend: 'Ext.container.Container',
    requires: [
        'AdvaSoftLogin.controller.dashboard.DashboardController',
        'AdvaSoftLogin.model.dashboard.DashboardModel'
                //'AdvaSoftLogin.view.dashboard.Network',        
    ],
    id: 'dashboard',
    cls: 'shadow-panel',
    controller: 'dashboard',
    viewModel: {
        type: 'dashboardmodel'
    },
    layout: 'fit',
    listeners: {
        hide: 'onHideView'
    },
    constructor: function (params) {
        var me = this;
        me.routeId = params.routeId;
        me.callParent();
    },
    items: [
        {
            html: '<p>Ciao</p>'
        },
//        {xtype:'panel', title:'prova'}
//        {
//            xtype: 'dashboardnetworkpanel',
//
//            // 60% width when viewport is big enough,
//            // 100% when viewport is small
//            responsiveCls: 'big-60 small-100'
//        },
//        {
//            xtype: 'dashboardhddusagepanel',
//            responsiveCls: 'big-20 small-50'
//        },
//        {
//            xtype: 'dashboardearningspanel',
//            responsiveCls: 'big-20 small-50'
//        },
//        {
//            xtype: 'dashboardsalespanel',
//            responsiveCls: 'big-20 small-50'
//        },
//        {
//            xtype: 'dashboardtopmoviepanel',
//            responsiveCls: 'big-20 small-50'
//        },
//        {
//            xtype: 'dashboardweatherpanel',
//            responsiveCls: 'big-40 small-100'
//        },
//        {
//            xtype: 'dashboardtodospanel',
//            responsiveCls: 'big-60 small-100'
//        },
//        {
//            xtype: 'dashboardservicespanel',
//            responsiveCls: 'big-40 small-100'
//        }
    ]
});