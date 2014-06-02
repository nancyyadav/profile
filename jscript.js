
(function($) {

	$.bottomTabs = function(el, options) {
		// To avoid scope issues, use 'base' instead of 'this'
		// to reference this class from internal events and functions.
		var base = this;

		// Access to jQuery and DOM versions of element
		base.$el = $(el);
		base.el = el;


		base.init = function() {
			base.options = $.extend({}, $.bottomTabs.defaultOptions, options);

			base.$el.tabs();

			base.$el.addClass("ui-tabs-bottom")
				.find(".ui-tabs-nav").add($(".ui-tabs-nav > *", base.$el))
				.removeClass("ui-corner-all ui-corner-top")
				.addClass("ui-corner-bottom");
		};

		// Run initializer
		base.init();
	};

	$.bottomTabs.defaultOptions = {
	};

	$.fn.bottomTabs = function(options) {
		return this.each(function() {
			(new $.bottomTabs(this, options));
		});
	};

})(jQuery);
