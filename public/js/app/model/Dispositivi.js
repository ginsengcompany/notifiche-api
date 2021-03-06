/*
 * File: app/model/Dispositivi.js
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

Ext.define('AdvaSoftLogin.model.Dispositivi', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Boolean',
        'Ext.data.field.Date'
    ],

    fields: [
        {
            name: 'id'
        },
        {
            name: 'codiceUtente'
        },
        {
            name: 'tipoDispositivo'
        },
        {
            name: 'clientId'
        },
        {
            name: 'descrizione'
        },
        {
            name: 'impronta'
        },
        {
            name: 'tipo'
        },
        {
            type: 'boolean',
            name: 'attivo'
        },
        {
            name: 'applicazione'
        },
        {
            name: 'createUser'
        },
        {
            type: 'date',
            name: 'createDate',
            dateFormat: 'time'
        },
        {
            name: 'lastupdateUser'
        },
        {
            type: 'date',
            name: 'lastupdateDate',
            dateFormat: 'time'
        }
    ]
});