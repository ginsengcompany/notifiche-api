Ext.define('AdvaSoftLogin.controller.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication',
    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin: function (button, e) {
        this.redirectTo("dashboard");
    },
    onLoginButton: function (button, e, eOpts) {
        var me = this;
        me.login();
    },
    onLoginAsButton: function (button, e, eOpts) {
        this.redirectTo("authentication.login");
    },
    onNewAccount: function (button, e, eOpts) {
        this.redirectTo("authentication.register");
    },
    onSignupClick: function (button, e, eOpts) {
        this.redirectTo("dashboard");
    },
    onResetClick: function (button, e, eOpts) {
        this.redirectTo("dashboard");
    },
    login: function () {
        var me = this;
        var refs = me.getReferences();
        //console.log(refs);
        var unencodedToken = refs.txtUsername.getValue() + ":" + refs.txtPassword.getValue();
        var encodedToken = "Basic " + Ext.util.Base64.encode(unencodedToken);
        var redirectUri = refs.redirectUri;

        Ext.Ajax.request({
            url: 'rest/token',
            method: 'POST',
            headers: {
                //'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': encodedToken
            },
            params: {'grant_type':'client_credentials', 'client_id':refs.txtUsername.getValue(), 'client_secret':refs.txtPassword.getValue()},
            success: function (response) {
                var obj = Ext.decode(response.responseText);
                me.validate(obj);
            },
            failure: function (response) {
                if (response.status === 401) {
                    Ext.MessageBox.show({
                        title: "PubbliGest Cloud",
                        msg: 'Username e/o Password non corretti',
                        buttons: Ext.MessageBox.OK,
                        animEl: 'mb4',
                        icon: Ext.MessageBox.ERROR
                    });
                }
                if (response.status === 400) {
                    Ext.MessageBox.show({
                        title: "PubbliGest Cloud",
                        msg: 'Username e/o Password non corretti',
                        buttons: Ext.MessageBox.OK,
                        animEl: 'mb4',
                        icon: Ext.MessageBox.ERROR
                    });
                }                
            }
        });
    },
    validate: function(oauth){
        var me = this;
        var refs = me.getReferences();
        var redirectUri = refs.redirectUri;        
        var encodedToken = "Bearer " + oauth.access_token;
        Ext.Ajax.request({
            url: 'rest/validate',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': encodedToken
            },
            success: function (response) {
                var obj = Ext.decode(response.responseText);
                var link = "";
                if( redirectUri !== undefined){
                    link = redirectUri + '?authToken=' + oauth.access_token + "&username=" + obj.username;
                }
                else{
                    link = 'index.html?authToken=' + oauth.access_token + "&username=" + obj.username;
                }
                //console.log(link);
                location.href = link;
            },
            failure: function (response) {               
            }
        });        
    }
});
