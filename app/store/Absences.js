Ext.define('Absences', {
	extend: 'Ext.data.Store',
	requires: 'Ext.data.proxy',
	
	config : {
		model: 'App.model.Absences',
		autoLoad: true,
		
		proxy: {
	        type: 'ajax',
	        url : 'app/store/data.json',
	        
	        reader: {
	            type: 'json',
	            rootProperty: 'group'
	    	}
	    }
	}
});