Ext.define("App.view.Absences", {
	extend : 'Ext.Panel',
	xtype : 'absencespanel',

	requires : [
		'Ext.dataview.List',
		'Ext.data.proxy.JsonP'
	],

	config : {
		title : 'Afwezigheden',
		iconCls : 'star',
		scrollable : true,
		styleHtmlContent : true,
	}
});
