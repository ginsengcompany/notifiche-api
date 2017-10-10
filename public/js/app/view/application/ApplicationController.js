Ext.define('AdvaSoftLogin.view.application.ApplicationController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.application',
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onRouteChange'
            }
        }
    },
    routes: {
        ':node': 'onRouteChange'
    },
    authToken: null,
    currentView: null,
    routeId: null,
    redirectUri: null,
    utente: new Object(),
    setLoginView: function (hashTag) {
        var queryParams = Ext.urlDecode(window.location.search);
        //console.log(queryParams);
        var me = this;
        var viewModel = me.getViewModel();

        var vmData = viewModel.getData();

        var newView = null;

        if(queryParams.redirect_uri !== undefined){
            me.redirectUri= queryParams.redirect_uri; //Ext.urlDecode(queryParams.redirect_ur);
        }
        var dati = hashTag.split("&");

        if (dati[1] === undefined) {

            hashTag = 'login';
            //var newView = Ext.create('Ext.panel.Panel',{title: 'Prova 2'});
            var newView = Ext.create('AdvaSoftLogin.view.login.Login', {
                hideMode: 'offsets',
                routeId: hashTag,
                redirectUri: queryParams.redirect_uri
            });
            vmData.currentView = newView;
        }
        else {
            me.setCustomView(hashTag);
        }
    },
    setCurrentView: function (hashTag) {
        var me = this;
        
        me.getView().createLayout(me.utente);
        hashTag = (hashTag || '').toLowerCase();
        var refs = me.getReferences();
        var refs = me.getReferences(),
                mainCard = refs.mainCardPanel,
                mainLayout = mainCard.getLayout(),
                navigationList = refs.navigationTreeList,
                viewModel = me.getViewModel(),
                vmData = viewModel.getData(),
                store = navigationList.getStore(),
                node = store.findNode('routeId', hashTag),
                view = node ? node.get('view') : null,
                lastView = vmData.currentView,
                existingItem = mainCard.child('component[routeId=' + hashTag + ']'),
                newView;
        navigationList.setSelection(node);

        newView = me.currentView;

        // Kill any previously routed window
        if (lastView && lastView.isWindow) {
            lastView.destroy();
        }

        lastView = mainLayout.getActiveItem();

        if (!newView || !newView.isWindow) {
            // !newView means we have an existing view, but if the newView isWindow
            // we don't add it to the card layout.
            if (existingItem) {
                // We don't have a newView, so activate the existing view.
                if (existingItem !== lastView) {
                    mainLayout.setActiveItem(existingItem);
                }
                newView = existingItem;
            } else {
                // newView is set (did not exist already), so add it and make it the
                // activeItem.
                Ext.suspendLayouts();
                mainLayout.setActiveItem(mainCard.add(newView));
                Ext.resumeLayouts(true);
            }
        }

        if (newView.isFocusable(true)) {
            newView.focus();
        }
        vmData.currentView = newView;
    },
    onNavigationTreeSelectionChange: function (tree, node) {
        var me = this;
        var view = node.get('view');
        var hashTag = node.get("routeId");
        //console.log(me.routeId);
        if (hashTag === 'login') {
            var redirect_uri = "http://" + window.location.host + window.location.pathname;
            window.location = "login/index.html?redirect_uri=" + redirect_uri;//"http://localhost:3001/index.html?redirect_uri=" + redirect_uri;
        } else {
            me.currentView = Ext.create('AdvaSoftLogin.' + (view || 'pages.views.Error404Window'), {hideMode: 'offsets', routeId: hashTag, authToken: me.authToken, utente: me.utente});

            if (me.routeId !== null) {
                if (me.routeId !== node.get("routeId")) {
                    me.routeId = node.get("routeId");
                    me.setCurrentView(me.routeId);
                }
            } else {
                me.routeId = node.get("routeId");
            }
        }
    },
    onToggleNavigationSize: function () {
        var me = this,
                refs = me.getReferences(),
                navigationList = refs.navigationTreeList,
                wrapContainer = refs.mainContainerWrap,
                collapsing = !navigationList.getMicro(),
                new_width = collapsing ? 64 : 250;

        if (Ext.isIE9m || !Ext.os.is.Desktop) {
            Ext.suspendLayouts();

            refs.senchaLogo.setWidth(new_width);

            navigationList.setWidth(new_width);
            navigationList.setMicro(collapsing);

            Ext.resumeLayouts(); // do not flush the layout here...

            // No animation for IE9 or lower...
            wrapContainer.layout.animatePolicy = wrapContainer.layout.animate = null;
            wrapContainer.updateLayout();  // ... since this will flush them
        } else {
            if (!collapsing) {
                // If we are leaving micro mode (expanding), we do that first so that the
                // text of the items in the navlist will be revealed by the animation.
                navigationList.setMicro(false);
            }

            // Start this layout first since it does not require a layout
            refs.senchaLogo.animate({dynamic: true, to: {width: new_width}});

            // Directly adjust the width config and then run the main wrap container layout
            // as the root layout (it and its chidren). This will cause the adjusted size to
            // be flushed to the element and animate to that new size.
            navigationList.width = new_width;
            wrapContainer.updateLayout({isRoot: true});

            // We need to switch to micro mode on the navlist *after* the animation (this
            // allows the "sweep" to leave the item text in place until it is no longer
            // visible.
            if (collapsing) {
                navigationList.on({
                    afterlayoutanimation: function () {
                        navigationList.setMicro(true);
                    },
                    single: true
                });
            }
        }
    },
    onMainViewRender: function () {
        var me = this;
        var queryParams = Ext.urlDecode(window.location.search);

        if (queryParams.authToken !== undefined) {
            me.verificaUtente(queryParams);
        }
        else {
            this.setLoginView("login");
        }  
    },
    onRouteChange: function (id) {
        //this.setCurrentView(id);
    },
    onSearchRouteChange: function () {

    },
    onEmailRouteChange: function () {

    },
    verificaUtente: function (queryParams) {
        var me = this;
        me.authToken = queryParams.authToken;
        me.username = queryParams.username;
        var encodedToken = "Bearer " + me.authToken;
        //me.setCurrentView('dashboard');
        Ext.Ajax.request({
            url: 'rest/users/' + me.username,
            method: 'GET',
            disableCaching: false,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': encodedToken
            },
            //params: {authToken: queryParams.authToken},
            success: function (response) {
                    var obj = Ext.decode(response.responseText);
                    me.utente = obj;
                    AdvaSoftLogin.app.authToken = me.authToken;
                    AdvaSoftLogin.app.username = me.username;
                    AdvaSoftLogin.app.stores.forEach(function(storeName){
                        var store = AdvaSoftLogin.app.getStore(storeName);
                        var proxy = store.getProxy();
                        if(!(proxy instanceof Ext.data.proxy.Memory)){
                            store.getProxy().setHeaders({'Content-Type': 'application/json', Authorization: 'Bearer ' + AdvaSoftLogin.app.authToken});
                        }
                        
                    });  
                    AdvaSoftLogin.app.models.forEach(function(modelsName){
                        var model = AdvaSoftLogin.app.getModel(modelsName);
                        var proxy = model.getProxy();
                        if(!(proxy instanceof Ext.data.proxy.Memory)){
                            model.getProxy().setHeaders({'Content-Type': 'application/json', Authorization: 'Bearer ' + AdvaSoftLogin.app.authToken});
                        }
                        
                    });
                    me.setCurrentView('dashboard');
            },
            failure: function (response) {
                
                if (response.status === 401) {
                   window.location = 'index.html';
                }
            }
        });
    },
    onExit: function () {
        var me = this;
        var encodedToken = "Bearer " + me.authToken;
        Ext.Ajax.request({
            url: 'logout',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': encodedToken
            },
            success: function (response) {
                //window.location = 'index.html';
            },
            failure: function (response) {
                //window.location = 'index.html';
            }
        });
    },
    onSaveUser: function (button, e, eOpts) {
//        var me = this;
        console.log('bbb');
        // var viewModel = me.getViewModel();
    }

});