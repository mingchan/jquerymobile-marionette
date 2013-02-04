define(['app/app', 'text!../../templates/app/page.html'],
function (App, pageTmpl){
	
	App.Helper = (function(){
		var Helper = {};
		
		Helper.newHeaderView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'header', 
				attributes: function() {
					return {
						'id': 						'header_' + opts.name,
						'data-role': 				'header',
						'data-position': 			'fixed',
						'data-tap-toggle': 			'false',
						'data-update-page-padding': 'false'					
					};
				},
				template: function () {	return '<h1>' + opts.title + '</h1>';},
			}))();
		};
		
		Helper.newPageLayout = function (opts) {
			return new ( Backbone.Marionette.Layout.extend({
				tagName: 'section', 
				attributes: function() {
					return {
						'id': 			'page_' + opts.name,
						'data-url': 	'page_' + opts.name,
						'data-role': 	'page'
					};
				},
		    	//template: function () {return _.template(layoutTmpl, {})},
		    	template:  _.template(pageTmpl),
				regions: {
				  header:	"#header",
				  content:	"#content",
				  footer: 	"#footer",
				},
				
				initialize: function(){
					$('body').append(this.$el);
					this.render();
				},				
				onRender: function() {
					this.header.show (opts.headerView);
				},
			}))();
		};

		
	  return Helper;
	
	})();
	
	return App.Helper;
});