/*
 * File: app/view/utenti/Utenti.js
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

Ext.define('AdvaSoftLogin.view.utenti.Utenti', {
    extend: 'Ext.container.Container',
    alias: 'widget.utentiutenti',

    requires: [
        'AdvaSoftLogin.view.utenti.UtentiViewModel',
        'AdvaSoftLogin.view.utenti.UtentiViewController',
        'Ext.grid.Panel',
        'Ext.view.Table',
        'Ext.grid.column.Action'
    ],

    controller: 'utentiutenti',
    viewModel: {
        type: 'utentiutenti'
    },
    id: 'utenti',
    padding: '10 10 10 10',
    layout: 'fit',

    items: [
        {
            xtype: 'gridpanel',
            title: 'Lista Utenti',
            store: 'Utenti',
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lastname',
                    text: 'Cognome',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'firstname',
                    text: 'Nome',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'username',
                    text: 'Username',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'email',
                    text: 'Email',
                    flex: 1
                },
                {
                    xtype: 'actioncolumn',
                    width: 60,
                    align: 'center',
                    items: [
                        {
                            handler: 'onEditUtente',
                            iconCls: 'fa fa-pencil'
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onUtentiAfterRender'
    }

});