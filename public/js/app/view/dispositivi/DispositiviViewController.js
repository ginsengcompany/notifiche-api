/*
 * File: app/view/dispositivi/DispositiviViewController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('AdvaSoftLogin.view.dispositivi.DispositiviViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dispositividispositivi',
    onAttivaDispositivo: function (view, rowIndex, colIndex, item, e, record, row) {
        var id = record.data._id;
        Ext.Ajax.request({
            url: 'dispositivo/attivazione/' + id,
            method: 'PUT',
            disableCaching: false,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + AdvaSoftLogin.app.authToken,
                'data': record.data.impronta
            },
            success: function (response) {
                var obj = Ext.decode(response.responseText);
                var store = AdvaSoftLogin.app.getStore("Dispositivi");
                store.load();                
            },
            failure: function (response) {

                if (response.status === 401) {
                    window.location = 'index.html';
                }
            }
        });
    },
    onDispositiviActivate: function (component, eOpts) {
        var store = AdvaSoftLogin.app.getStore("Dispositivi");
        store.load();
    }

});
