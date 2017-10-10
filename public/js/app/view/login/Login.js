Ext.define('AdvaSoftLogin.view.login.Login', {
    extend: 'AdvaSoftLogin.view.login.LockingWindowView',
//    extend: 'Ext.window.Window',
    xtype: 'pageslogin',
    requires: [
        'AdvaSoftLogin.view.login.DialogView',
        'AdvaSoftLogin.view.login.LoginViewModel',
        'Ext.container.Container',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.button.Button'
    ],
    //title: 'Benvenuto!',
    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus as well
    txtUsername: null,
    txtPassword: null,
    redirectUri: null,
    constructor: function (arguments) {
        var me = this;
        me.redirectUri = arguments.redirectUri;
        me.callParent(arguments);
    },
    initComponent: function () {
        var me = this;
        this.addCls('user-login-register-container');
        me.txtUsername = Ext.create('Ext.form.field.Text', {
            xtype: 'textfield',
            reference: 'txtUsername',
            cls: 'auth-textbox',
            name: 'userid',
            bind: '{userid}',
            height: 55,
            hideLabel: true,
            allowBlank: false,
            emptyText: 'user id',
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-email-trigger'
                }
            }
        });

        me.txtPassword = Ext.create('Ext.form.field.Text', {
            xtype: 'textfield',
            reference: 'txtPassword',
            cls: 'auth-textbox',
            height: 55,
            hideLabel: true,
            emptyText: 'Password',
            inputType: 'password',
            name: 'password',
            bind: '{password}',
            allowBlank: false,
            triggers: {
                glyphed: {
                    cls: 'trigger-glyph-noop auth-password-trigger'
                }
            }
        });
        me.items = [
            {
                xtype: 'authdialog',
                defaultButton: 'loginButton',
                autoComplete: true,
                bodyPadding: '20 20',
                cls: 'auth-dialog-login',
                header: false,
                width: 415,
                refs: {redirectUri: me.redirectUri},
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                defaults: {
                    margin: '5 0'
                },
                items: [
                    {
                        xtype: 'label',
                        text: 'Accedi'
                    },
                    this.txtUsername,
                    this.txtPassword,
                    {
                        xtype: 'button',
                        reference: 'loginButton',
                        scale: 'large',
                        ui: 'soft-green',
                        iconAlign: 'right',
                        iconCls: 'x-fa fa-angle-right',
                        text: 'Login',
                        formBind: true,
                        listeners: {
                            click: 'onLoginButton'
                        }
                    }
                ]
            }
        ];
        this.callParent(arguments);
    }
});
