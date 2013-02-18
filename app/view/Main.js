Ext.define("App.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	/* content >> Login.js */
            	xtype: 'loginpanel'
            },
            {
            	/* content >> Absences.js */
            	xtype: 'absencespanel'
            }
        ]
    }
});
