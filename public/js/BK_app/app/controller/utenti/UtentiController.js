Ext.define('AdvaSoftLogin.controller.utenti.UtentiController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.utenti',
    requires: [
        'Ext.util.TaskRunner'
    ],
    refs: [
        {ref: 'viewEditUser', selector: 'editUserView'},
        {ref: 'gridUserView', selector: 'gridUtenti'}
    ],
    winEdit: null,
    record: null,
    grid: null,
    clearChartUpdates: function () {
        this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
    },
    onDestroy: function () {
        this.clearChartUpdates();
        this.callParent();
    },
    onHideView: function () {
        this.clearChartUpdates();
    },
    onOpenWindow: function () {
        var win = Ext.create('Ext.window.Window', {
            width: 600,
            height: 500
        });

        win.show();
    },
    onGridSelect: function (grid, record, index, eOpts) {
        var me = this;
        me.record = record;
    },
    onChangeImage: function (object, newValue, oldValue, eOpts) {
        var me = this;
        var refs = me.getReferences();
        refs.imageView.setSrc(newValue);
        //console.log(refs.imageView);
    },
    onEditUser: function (grid, rowIndex, colIndex) {
        var me = this;
        var refs = me.getReferences();
        me.grid = refs.gridUtenti;
        me.grid.getSelectionModel().select(rowIndex);
        var record = me.grid.getSelectionModel().getSelection()[0];
        var encodedToken = "Bearer " + me.grid.authToken;
        Ext.Ajax.request({
            url: '/utenti/' + record.get('_id'),
            method: 'GET',
            disableCaching: false,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': encodedToken
            },
            success: function (response) {
                var obj = Ext.decode(response.responseText);
                me.winEdit = Ext.create('AdvaSoftLogin.view.utenti.EditUtenteView', {});
                me.winEdit.getViewModel().setData({utente: me.record});
                me.winEdit.setStore(me.grid.getStore());
                me.winEdit.show();
            },
            failure: function (response) {
            }
        });
    },
    onRemoveUser: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = grid.getStore().getAt(rowIndex);
        store.remove(record);
        store.sync();
    },
    onUserAdd: function () {
        var me = this;
        var refs = me.getReferences();
        me.grid = refs.gridUtenti;
        var inst = me.grid.getStore().add({
            image: 'data:image/png;base64,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'
        });
        me.winEdit = Ext.create('AdvaSoftLogin.view.utenti.EditUtenteView', {});
        me.winEdit.getViewModel().setData({utente: inst[0]});
        me.winEdit.setStore(me.grid.getStore());
        me.winEdit.show();
    },
    onSaveUser: function (button, e, eOpts) {
        //"data:image/jpg;base64, " +
        var me = this;
        var refs = me.getReferences();

        refs.txtClientId.setValue(refs.txtUsername.getValue());
        refs.txtClientSecret.setValue(refs.txtPassword.getValue());

        if (!refs.txtEmail.isValid()) {
        } else if (refs.txtPassword.getValue() !== refs.txtVerificaPassword.getValue()) {
            refs.txtVerificaPassword.markInvalid('La password non corrisponde');
        } else {
            me.getView().store.sync({
                success: function (response) {
                    me.getView().close();
                },
                failure: function (response, options) {
//                    console.log(response);
                    Ext.each(response.exceptions, function (operation) {
                        if (operation.error.status === 403) {
                            var objResponse = Ext.decode(operation.error.response.responseText);
                            Ext.MessageBox.show({
                                title: "PubbliGest Cloud",
                                msg: objResponse.message,
                                buttons: Ext.MessageBox.OK,
                                animEl: 'mb4',
                                icon: Ext.MessageBox.ERROR
                            });
                        }
                    });
                }
            });
        }

    },
    onUndoUser: function (button, e, eOpts) {
        var me = this;
        me.getView().store.rejectChanges();
        me.getView().close();
    }
});

