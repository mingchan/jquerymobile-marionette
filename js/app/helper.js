define(['app/app','text!../../templates/app/panel.html'],
function (App, panelTmpl){
	
	App.Helper = (function(){
		var Helper = {};
		
		Helper.newPanelView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'header', 
				attributes: function() {
					return {
						'region_id': 				'panel',						
						'id': 						'panel',
						'data-role': 				'panel',
					};
				},
				initialize: function () {
					_.bindAll (this, "template");
				},
				template: function () {	return  _.template(panelTmpl, {});},
				events: {
				'click a': function(e) {
					if ($(e.currentTarget).attr('href') === '#'+ $.mobile.activePage.attr('id') ) {
						$.mobile.activePage.find('[data-role=panel]').panel( "close");

					} 
					//_showTargetPage ($(e.currentTarget).attr('target-page'));
				},
				}//events

			}))(opts);
		};
		
		Helper.newHeaderView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'header', 
				attributes: function() {
					return {
						'region_id': 				'header',						
						'id': 						'header_' + opts.name,
						'data-role': 				'header',
						'data-position': 			'fixed',
						'data-tap-toggle': 			'false',
						'data-update-page-padding': 'false'					
					};
				},
				initialize: function () {
					_.bindAll (this, "template");
				},				
				template: function () {	
					return '<h1>' + this.options.title + '</h1>' + 
						'<a href="#panel" id="app-menu" data-role="button" class="ui-btn-left">Menu</a>';},
			}))(opts);
		};
		
		Helper.newFooterView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'footer', 
				attributes: function() {
					return {
						'region_id': 				'footer',						
						'id': 						'footer_' + this.options.name,
						'data-role': 				'footer',
						'data-id': 					'footer_fixed',
						'data-position': 			'fixed',
						'data-tap-toggle': 			'false'
					};
				},
				initialize: function () {
					_.bindAll (this, "template");
				},				
				template: function () {	return '<h1>' + this.options.title + '</h1>';},
			}))(opts);
		};

		Helper.newContentView = function (opts) {
			return new  (Backbone.Marionette.ItemView.extend({
				tagName: 'article', 
				attributes: function() {
					return {
						'region_id': 				'content',						
						'id': 						'content_' + this.options.name,
						'data-role': 				'content'
					};
				},
				initialize: function () {
					_.bindAll (this, "template");
				},				
		    	template: function () {return options.template},
			}))(opts);
		};


		var _ReplaceWithRegion = Backbone.Marionette.Region.extend({
				 open: function(view){
				 	//Need this to keep Panel/Header/Content/Footer at the same level for panel to work properly
			        this.$el.replaceWith(view.el);
				}
		});

		Helper.newPageLayout = function (opts) {
			var _opts = _.extend ({	name: 'noname',
									panelView: null,
									headerView: null,
									contentView: null, 
									footerView: null,								
									}, opts);
			
			return new ( Backbone.Marionette.Layout.extend({
				tagName: 'section', 
				attributes: function() {
					return {
						'id': 			'page_' + this.options.name,
						'data-url': 	'page_' + this.options.name,
						'data-role': 	'page'
					};
				},
				template: function () {	
					return "<div region_id='panel'/><div region_id='header'/><div region_id='content'/><div region_id='footer'/>";
				},
				regions: {
				  panel:	{selector: "[region_id=panel]",		regionType: _ReplaceWithRegion},
				  header:	{selector: "[region_id=header]",	regionType: _ReplaceWithRegion},
				  content:	{selector: "[region_id=content]",	regionType: _ReplaceWithRegion},
				  footer:	{selector: "[region_id=footer]",	regionType: _ReplaceWithRegion},
				},
				
				initialize: function(){
					$('body').append(this.$el);
					this.render();
				},				
				onRender: function() {
					if (this.options.panelView) {
						this.panel.show (this.options.panelView);
					};
					if (this.options.headerView) {
						this.header.show (this.options.headerView);
					};
					if (this.options.contentView) {
						this.content.show(this.options.contentView);
					};
					if (this.options.footerView) {
						this.footer.show (this.options.footerView);
					};
				},
			}))(_opts);
		};

		
	  return Helper;
	
	})();
	
	return App.Helper;
});