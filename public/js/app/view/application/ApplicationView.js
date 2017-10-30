Ext.define('AdvaSoftLogin.view.application.ApplicationView', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',
//
    requires: [
        'AdvaSoftLogin.view.utenti.UtentiViewController',
        'AdvaSoftLogin.view.application.ApplicationController',
        'Ext.list.Tree'
    ],
//
    controller: 'application',
    viewModel: {
        type: 'applicationmodel'
    },
    cls: 'sencha-dash-viewport',
    itemId: 'mainView',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
        render: 'onMainViewRender'
    },
    myToolbar: null,
    maincontainer: null,
    utente: new Object(),
    constructor: function (arguments) {
        var me = this;
        me.utente = arguments.utente;
        //me.createLayout();
        me.callParent(arguments);
    },
    createLayout: function (utente) {
        var me = this;
        me.utente = new Object();
        me.utente = utente;

        if (me.myToolbar === null) {
            var navStore = Ext.create('AdvaSoftLogin.store.application.NavigationTree', {});

//            if (me.utente !== null) {
//                navStore.setRootNode({'children': me.utente.menu});
//                me.myToolbar = me.getUserToolBar();
//            } else {
//                
//            }
            me.myToolbar = me.getStandardToolBar();
            
            me.maincontainer = Ext.create('AdvaSoftLogin.view.application.MainContainerWrapView', {
                id: 'main-view-detail-wrap',
                reference: 'mainContainerWrap',
                flex: 1,
                items: [
                    {
                        xtype: 'treelist',
                        reference: 'navigationTreeList',
                        itemId: 'navigationTreeList',
                        ui: 'navigation',
                        store: navStore, //'NavigationTree',
                        width: 250,
                        expanderFirst: false,
                        expanderOnly: false,
                        listeners: {
                            selectionchange: 'onNavigationTreeSelectionChange'
                        }
                    },
                    {
                        xtype: 'container',
                        flex: 1,
                        reference: 'mainCardPanel',
                        cls: 'sencha-dash-right-main-container',
                        itemId: 'contentPanel',
                        layout: {
                            type: 'card',
                            anchor: '100%'
                        }
                    }
                ]
            }
            );
        }

        me.add(me.myToolbar);
        me.add(me.maincontainer);
    },
    getStandardToolBar: function () {
        var me = this;
        var standardToolBar = Ext.create('Ext.toolbar.Toolbar', {
            cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="themes/theme-custom/images/logo_small.png"></div>',
                    width: 250

                },
                {
                    margin: '0 0 0 8',
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize',
                    tooltip: 'Nascondi Menu'
                },
                {
                    xtype: 'tbspacer',
                    flex: 1
                },
                {
                    xtype: 'button',
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-power-off',
                    hrefTarget: '_self',
                    tooltip: 'Esci',
                    listeners: {
                        click: 'onExit'
                    }
                },                
                {
                    xtype: 'tbspacer',
                    widht: 30
                },
                {
                    xtype: 'tbtext',
                    text: me.utente.lastname + ' ' + me.utente.firstname,
                    cls: 'top-user-name'
                }
            ]
        });

        return standardToolBar;
    },
    getUserToolBar: function () {
        var me = this;
        var userToolBar = Ext.create('Ext.toolbar.Toolbar', {
            cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
            height: 64,
            itemId: 'headerBar',
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="themes/theme-custom/images/logo_small.png">MemoMed</div>',
                    width: 250
                },
                {
                    margin: '0 0 0 8',
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-navicon',
                    id: 'main-navigation-btn',
                    handler: 'onToggleNavigationSize',
                    tooltip: 'Nascondi Menu'
                },
                {
                    xtype: 'tbspacer',
                    flex: 1
                },
                {
                    xtype: 'button',
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-power-off',
                    hrefTarget: '_self',
                    tooltip: 'Esci',
                    listeners: {
                        click: 'onExit'
                    }
                },
                {
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-envelope',
                    href: '#email',
                    hrefTarget: '_self',
                    tooltip: 'Check your email'
                },
                {
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-bell'
                },
                {
                    cls: 'delete-focus-bg',
                    iconCls: 'x-fa fa-th-large',
                    href: '#profile',
                    hrefTarget: '_self',
                    tooltip: 'See your profile'
                },
                {
                    xtype: 'tbtext',
                    text: me.utente.datiLogin.firstname + ' ' + me.utente.datiLogin.lastname,
                    cls: 'top-user-name'
                },
                {
                    xtype: 'image',
                    cls: 'header-right-profile-image',
                    height: 35,
                    width: 35,
                    alt: 'current user image',
                    src: me.utente.datiLogin.image


                            //src: //'themes/theme-custom/images/user-profile/2.png'
                }
            ]
        });

        return userToolBar;
    }
});


