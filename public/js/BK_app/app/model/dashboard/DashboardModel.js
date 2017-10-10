Ext.define('AdvaSoftLogin.model.dashboard.DashboardModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dashboard',
    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String',
        'Ext.data.field.Boolean'
    ],
    storeModel: null,
    constructor: function () {
        var me = this;
        console.log('Model 1');
        me.storeModel = Ext.create('AdvaSoftLogin.model.dashboard.MultiDataXY');
        console.log('Model 2');
        console.log();
        me.callParent();
    },
//    data: {
//        currentView: null
//    },    
    stores: {
//        'dashboard.QGAreaStore': {
//            autoLoad: true,
//            model: 'Admin.model.DataXY',
//            proxy: {
//                type: 'ajax',
//                url: '~api/qg/area',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
//
//        },
//        'dashboard.QGBarStore': {
//            autoLoad: true,
//            model: 'Admin.model.DataXY',
//            proxy: {
//                type: 'ajax',
//                url: '~api/qg/bar',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
//        },
//        'dashboard.QGLineStore': {
//            autoLoad: true,
//            model: 'Admin.model.DataXY',
//            proxy: {
//                type: 'ajax',
//                url: '~api/qg/line',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
//        },
//        'dashboard.QGPieStore': {
//            autoLoad: true,
//            model: 'Admin.model.DataXY',
//            proxy: {
//                type: 'ajax',
//                url: '~api/qg/pie',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }            
//
//        },
        dashboardfulllinechartstore: {
            autoLoad: true,
            model: this.storeModel, //'Ext.application.model.MultiDataXY',
            //fields: ['xvalue', 'y1value', 'y2value'],
//            proxy: {
//                type: 'ajax',
//                url: '~api/dashboard/full',
//                //url: 'rest/data',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
            data: [
                {
                    "xvalue": 250,
                    "y1value": 94,
                    "y2value": 40
                },
                {
                    "xvalue": 500,
                    "y1value": 78,
                    "y2value": 46
                },
                {
                    "xvalue": 750,
                    "y1value": 60,
                    "y2value": 53
                },
                {
                    "xvalue": 1250,
                    "y1value": 51,
                    "y2value": 48
                },
                {
                    "xvalue": 1500,
                    "y1value": 60,
                    "y2value": 36
                },
                {
                    "xvalue": 1750,
                    "y1value": 68,
                    "y2value": 26
                },
                {
                    "xvalue": 2250,
                    "y1value": 59,
                    "y2value": 37
                },
                {
                    "xvalue": 2500,
                    "y1value": 40,
                    "y2value": 58
                },
                {
                    "xvalue": 2750,
                    "y1value": 24,
                    "y2value": 78
                },
                {
                    "xvalue": 3250,
                    "y1value": 36,
                    "y2value": 85
                },
                {
                    "xvalue": 3500,
                    "y1value": 65,
                    "y2value": 70
                },
                {
                    "xvalue": 3750,
                    "y1value": 94,
                    "y2value": 55
                },
                {
                    "xvalue": 4250,
                    "y1value": 103,
                    "y2value": 61
                },
                {
                    "xvalue": 4500,
                    "y1value": 83,
                    "y2value": 82
                },
                {
                    "xvalue": 4750,
                    "y1value": 61,
                    "y2value": 102
                },
                {
                    "xvalue": 5250,
                    "y1value": 55,
                    "y2value": 95
                },
                {
                    "xvalue": 5500,
                    "y1value": 70,
                    "y2value": 67
                },
                {
                    "xvalue": 5750,
                    "y1value": 84,
                    "y2value": 39
                },
                {
                    "xvalue": 6250,
                    "y1value": 78,
                    "y2value": 31
                },
                {
                    "xvalue": 6500,
                    "y1value": 58,
                    "y2value": 49
                },
                {
                    "xvalue": 6750,
                    "y1value": 38,
                    "y2value": 69
                },
                {
                    "xvalue": 7250,
                    "y1value": 41,
                    "y2value": 74
                },
                {
                    "xvalue": 7500,
                    "y1value": 65,
                    "y2value": 60
                },
                {
                    "xvalue": 7750,
                    "y1value": 89,
                    "y2value": 46
                }
            ]
                    

        },
//        dashboardvisitorchartstore: {
//            autoLoad: true,
//            model: 'Admin.model.MultiDataXY',
//            proxy: {
//                type: 'ajax',
//                url: '~api/dashboard/visitor',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
//        },
//        dashboardcouncechartstore: {
//            autoLoad: true,
//            model: 'Admin.model.MultiDataXY',
//            proxy: {
//                type: 'ajax',
//                url: '~api/dashboard/counce',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
//        },
//        subscriptionstore: {
//            autoLoad: true,
//            model: 'Admin.model.Subscription',
//            proxy: {
//                type: 'ajax',
//                url: '~api/subscriptions',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }
//        },
//        dashboardtaskstore: {
//            autoLoad: true,
//            fields: [
//                {
//                    type: 'int',
//                    name: 'id'
//                },
//                {
//                    type: 'string',
//                    name: 'task'
//                },
//                {
//                    type: 'boolean',
//                    name: 'done'
//                }
//            ],
//            proxy: {
//                type: 'ajax',
//                url: '~api/dashboard/tasks',
//                reader: {
//                    type: 'json',
//                    rootProperty: 'data'
//                }
//            }            
//        }
    }
});
