var app = app || {};

(function() {
	'use strict';
	app.PersonView = Backbone.View.extend({
		tagName: 'li',

		template: _.template($('#person-template').html()),

		events: {
			// Deleting a person- used in dev, left out in prod.
			// 'click .delete': 'clear'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		// Deleting a person- used in dev, left out in prod.
		// clear: function () {
		// 	this.model.destroy();
		// }

	});

})(jQuery);