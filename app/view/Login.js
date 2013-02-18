Ext.define("App.view.Login", {
	extend : 'Ext.form.Panel',
	xtype : 'loginpanel',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Password',
		'Ext.Img'
	],
	
	config : {
		title : 'Login',
		iconCls : 'user',
		//cls: 'login', >> css-class
		//url: login.php, >> submit send to
		scrollable : true,
		styleHtmlContent : true,

		layout : 'vbox',
		
		items : [
		{
			align: 'center',
			xtype: 'image',
			width: 178,
			height: 95,
			src: 'resources/images/logo-round.png'
		},{
			items : [{
				xtype : 'fieldset',
				title : 'Login',
				
				items : [{
					xtype : 'textfield',
					label : 'Naam'
				}, {
					xtype : 'passwordfield',
					label : 'Wachtwoord'
				}]
			}, {
				xtype : 'button',
				text : 'Login',
				ui : 'confirm',
				handler : function() {
					//this.up('loginpanel').submit();
				}
			}]
		}]
	}
});
