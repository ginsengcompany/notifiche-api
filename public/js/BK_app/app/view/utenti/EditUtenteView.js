Ext.define('AdvaSoftLogin.view.utenti.EditUtenteView', {
    extend: 'Ext.window.Window',
    alias: 'widget.editUserView',
    requires: [
        'AdvaSoftLogin.model.utenti.UtentiViewModel'
    ],
    reference: 'editUtente',
    closeAction: 'hide',
    closable: false,
    modal: true,
    width: 500,
    height: 300,
    controller: 'utenti',
    changingImage: null,
    txtCognome: null,
    txtNome: null,
    padding: '5 5 5 5',
    utente: null,
    id: null,
    store: null,
    viewModel: {
        type: 'utente'
    },
    bind: {
        title: '{utente.firstname} {utente.lastname}'
    },
    constructor: function (params) {
        var me = this;
        me.id = params.id;
        me.callParent();
    },
    initComponent: function () {
        var me = this;
        me.saveUser = Ext.create('Ext.button.Button', {
            text: 'Salva',
            glyph: 'xf0c7@FontAwesome',
            listeners: {
                scope: 'controller',
                click: 'onSaveUser'
            }
        });
        me.undo = Ext.create('Ext.button.Button', {text: 'Annulla', glyph: 'xf0e2@FontAwesome',
            listeners: {
                scope: 'controller',
                click: 'onUndoUser'
            }
        });

//        var viewModel = me.getViewModel();
//        var srcImage = (viewModel.data.image !== undefined) ? viewModel.data.image : 'data:image/png;base64,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';
        me.changingImage = Ext.create('Ext.Img', {
            //src: srcImage, //viewModel.data.image, //'data:image/png;base64,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',
            width: 184,
            height: 90,
            reference: 'imageView',
            renderTo: Ext.getBody()
        });
        me.txtImage = Ext.create('Ext.form.field.Text', {hidden: true, emptyText: 'Image', reference: 'txtImage', bind: '{utente.image}', listeners: {
                change: 'onChangeImage'
        }});
    
        me.txtCognome = Ext.create('Ext.form.field.Text', {emptyText: 'Cognome', reference: 'txtCognome', bind: '{utente.lastname}'});
        me.txtNome = Ext.create('Ext.form.field.Text', {emptyText: 'Nome', bind: '{utente.firstname}'});
        me.txtEmail = Ext.create('Ext.form.field.Text', {emptyText: 'Email', reference: 'txtEmail', bind: '{utente.email}', msgTarget: 'side', vtype: 'email'});
        me.txtUsername = Ext.create('Ext.form.field.Text', {emptyText: 'Username', reference: 'txtUsername', bind: '{utente.username}', msgTarget: 'side'});
        me.txtClientId = Ext.create('Ext.form.field.Text', {hidden: true, emptyText: 'ClientId', reference: 'txtClientId', bind: '{utente.clientId}', msgTarget: 'side'});
        me.txtPassword = Ext.create('Ext.form.field.Text', {emptyText: 'Password', reference: 'txtPassword', bind: '{utente.password}', inputType: 'password'});
        me.txtClientSecret = Ext.create('Ext.form.field.Text', {hidden: true, emptyText: 'ClientSecret', reference: 'txtClientSecret', bind: '{utente.clientSecret}', inputType: 'password'});
        me.txtVerificaPassword = Ext.create('Ext.form.field.Text', {emptyText: 'Verifica Password', reference: 'txtVerificaPassword', msgTarget: 'side', inputType: 'password'});
        me.bbar = ['->', me.saveUser, '-', me.undo];
        me.items = [
            {
                xtype: 'container',
                padding: '3 3 3 3',
                title: null,
                layout: {
                    type: 'hbox',
                    halign: 'stretch',
                    constrainAlign: true
                },
                items: [
                    {width: 90, layout: 'fit', border: false, margin: '0px 0px 0px 3px', items: [me.changingImage]},
                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 0px 3px', items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                items: [
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtImage]},
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtCognome]},
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtNome]}
                                ]
                            }
                        ]}
                ]
            },
            {
                xtype: 'container',
                padding: '3 3 3 3',
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                items: [
                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 0px 3px', items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                items: [
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtClientId]},
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtUsername]},
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtEmail]}
                                ]
                            }
                        ]},
                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 0px 3px', items: [
                            {
                                xtype: 'container',
                                layout: {
                                    type: 'vbox',
                                    align: 'stretch'
                                },
                                items: [
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtClientSecret]},
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtPassword]},
                                    {flex: 1, layout: 'fit', border: false, margin: '0px 0px 3px 0px', items: [me.txtVerificaPassword]}
                                ]
                            }
                        ]}
                ]
            }
        ];
        me.callParent();
    },
    setStore: function (store) {
        var me = this;
        me.store = store;
    },
    setUtente: function (utente) {
        var me = this;
        me.utente = utente;
        me.setData();
    },
    setData: function () {
        var me = this;
        me.getViewModel().setData({utente: me.utente});
    }
});
