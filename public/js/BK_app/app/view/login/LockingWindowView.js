Ext.define('AdvaSoftLogin.view.login.LockingWindowView', {
    extend: 'Ext.window.Window',
//    xtype: 'lockingwindow',
//
    cls: 'auth-locked-window',
//
    closable: false,
    resizable: false,
    autoShow: true,
    titleAlign: 'center',
    maximized: true,
    modal: true,
    border: false,
    frameHeader: false,
    header: false,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});
