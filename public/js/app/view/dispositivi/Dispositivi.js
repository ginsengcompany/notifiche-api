/*
 * File: app/view/dispositivi/Dispositivi.js
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

Ext.define('AdvaSoftLogin.view.dispositivi.Dispositivi', {
    extend: 'Ext.container.Container',
    alias: 'widget.dispositividispositivi',

    requires: [
        'AdvaSoftLogin.view.dispositivi.DispositiviViewModel',
        'AdvaSoftLogin.view.dispositivi.DispositiviViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Date',
        'Ext.grid.column.Action',
        'Ext.view.Table'
    ],

    controller: 'dispositividispositivi',
    viewModel: {
        type: 'dispositividispositivi'
    },
    id: 'dispositivi',
    padding: '10 10 10 10',
    layout: 'fit',

    items: [
        {
            xtype: 'gridpanel',
            title: 'Lista Dispositivi',
            store: 'Dispositivi',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 60,
                    dataIndex: 'tipoDispositivo',
                    text: 'Disp.',
                    tooltip: 'Tipo Dispositivo'
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    dataIndex: 'tipo',
                    text: 'Tipo'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'descrizione',
                    text: 'Descrizione',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'applicazione',
                    text: 'Applicazioni'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'createUser',
                    text: 'Create User'
                },
                {
                    xtype: 'datecolumn',
                    width: 150,
                    dataIndex: 'createDate',
                    text: 'Data Creazione',
                    format: 'd-m-Y H:i:s'
                },
                {
                    xtype: 'actioncolumn',
                    width: 60,
                    align: 'center',
                    text: 'Stato',
                    items: [
                        {
                            getClass: function(v, metadata, r, rowIndex, colIndex, store) {
                                var cls = "fa fa-check";
                                if(r.get('attivo')){
                                    cls = "fa fa-check green-font";
                                }

                                return cls;
                            },
                            handler: 'onAttivaDispositivo',
                            iconCls: 'fa fa-check'
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        activate: 'onDispositiviActivate'
    }

});