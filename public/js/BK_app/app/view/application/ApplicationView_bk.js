Ext.define('AdvaSoftLogin.view.application.ApplicationView' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.application',
    myToolbar: null,
    border: false,
    autoScroll: true,
    controller: 'application',
    viewModel: {
        type: 'applicationmodel'
    },
    listeners: {
        render: 'onMainViewRender'
    },
    initComponent: function() {
        var me = this;
        var navStore = Ext.create('AdvaSoftLogin.store.application.NavigationTree', {});
        if (me.myToolbar === null) {
            me.myToolbar = Ext.create('Ext.toolbar.Toolbar', {
                cls: 'sencha-dash-dash-headerbar toolbar-btn-shadow',
                height: 64,
                itemId: 'headerBar',
                items: [
                    {
                        xtype: 'component',
                        reference: 'senchaLogo',
                        cls: 'sencha-logo',
                        html: '<div class="main-logo"><img src="themes/theme-custom/images/sencha-icon.png">Gesan srl</div>',
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
                        cls: 'delete-focus-bg',
                        iconCls: 'x-fa fa-search',
                        href: '#search',
                        hrefTarget: '_self',
                        tooltip: 'See latest search'
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
                        text: 'Goff Smith',
                        cls: 'top-user-name'
                    },
                    {
                        xtype: 'image',
                        cls: 'header-right-profile-image',
                        height: 35,
                        width: 35,
                        alt: 'current user image',
                        src: 'themes/theme-custom/images/user-profile/2.png'
                    }
                ]
            });
        }
        me.tbar = me.myToolbar;
        me.maincontainer = Ext.create('AdvaSoftLogin.view.application.MainContinerView', {
                id: 'main-view-detail-wrap',
                border: false,
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
            });
        me.items = [];
        this.callParent(arguments);
    }
});

