Ext.define('Absences', {
    extend: 'Ext.data.Model',
	
    config: {
        fields: [
            {name: 'date', type: 'string'},
            {name: 'group', type: 'string'},
            {name: 'docent', type: 'string'},
            {name: 'reason', type: 'string'}
        ]
    }
});
