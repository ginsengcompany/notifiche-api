Ext.define('AdvaSoftLogin.model.login.LoginModel', {
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