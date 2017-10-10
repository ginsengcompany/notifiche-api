Ext.application({
    extend: 'Ext.app.Application',
    name: 'AdvaSoftLogin',
    appFolder: 'js/app',   
    authToken: null,
    requires: [
        'AdvaSoftLogin.view.application.ApplicationView',
        'AdvaSoftLogin.model.application.ApplicationModel',
        'AdvaSoftLogin.store.application.NavigationTree'
    ],
    launch: function() {
        Ext.create('AdvaSoftLogin.view.application.ApplicationView', {});
    }
});