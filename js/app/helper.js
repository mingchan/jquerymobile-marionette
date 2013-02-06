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
		
		Helper.newFooterView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'footer', 
				attributes: function() {
					return {
						'id': 						'footer_' + opts.name,
						'data-role': 				'footer',
						'data-id': 					'footer_fixed',
						'data-position': 			'fixed',
						'data-tap-toggle': 			'false'
					};
				},
				template: function () {	return '<h1>' + opts.title + '</h1>';},
			}))();
		};

		Helper.newContentView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'article', 
				attributes: function() {
					return {
						'id': 						'content_' + opts.name,
						'data-role': 				'content'
					};
				},
		    	template: function () {return opts.template},
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
					this.content.show(opts.contentView);
					this.footer.show (opts.footerView);
				},
			}))();
		};

		
	  return Helper;
	
	})();
	
	return App.Helper;
});