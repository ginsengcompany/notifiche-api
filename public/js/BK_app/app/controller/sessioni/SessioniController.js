Ext.define('AdvaSoftLogin.controller.sessioni.SessioniController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sessioni',
    requires: [
        'Ext.util.TaskRunner'
    ],
    refs: [ ],
    clearChartUpdates: function () {
        this.chartTaskRunner = Ext.destroy(this.chartTaskRunner);
    },
    onDestroy: function () {
        console.log('Sessioni - onDestroy');
        this.clearChartUpdates();
        this.callParent();
    },
    onHideView: function () {
        console.log('Hide sessione');
        //this.clearChartUpdates();
        Ext.destroy(this);
    },
    onRemoveSession: function (grid, rowIndex, colIndex) {
        var store = grid.getStore();
        var record = grid.getStore().getAt(rowIndex);
        store.remove(record);
        store.sync();
    }
});

