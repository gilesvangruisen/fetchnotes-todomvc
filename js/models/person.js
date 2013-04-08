var app = app || {};

(function() {
	'use strict';
	app.Person = Backbone.Model.extend({
		defaults: {
			name: 'Me'
		}
	});
	
})();