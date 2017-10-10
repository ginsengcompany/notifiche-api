Ext.define('AdvaSoftLogin.view.login.LoginViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.authentication',

    data: {
        userid : '',
        fullName : '',
        password : '',
        email    : '',
        persist: false,
        agrees : false,
        redirectUri: null
    }
});