define(['app/app'], function (App){	 
	
	App.Routing = (function (App) {
		var Routing = {};
				
		var _routes = [
		    {"#page_landing"	: { events: "bs", handler:"page_landing_handler"} },
		    {"#page_about"		: { events: "bs", handler:"page_about_handler"} },
		    {"#page_login"		: { events: "bs", handler:"page_login_handler"} },
			];
		var _route_handlers = {
			"page_landing_handler" : function(eventType, matchObj, ui, page, evt){
				console.log ('page_landing_handler');
			},//page_landing_handler
			"page_about_handler" : function(eventType, matchObj, ui, page, evt){
				console.log ('page_about_handler');
			},//page_about_handler
			"page_login_handler" : function(eventType, matchObj, ui, page, evt){
				console.log ('page_login_handler');
			},//page_about_handler
			
		};
		
		var _router= new $.mobile.Router(_routes, _route_handlers);
		
		Routing.changePage = function (page,opts) {
			opts = opts || {};
			_.extend(opts, { transition: "slide", changeHash: false});
			$.mobile.changePage(page,  opts );
		}
		
		App.addInitializer(function(options){
			App.vent.trigger("router:started");
		});//JQMM.App.addInitializer
	
		return Routing;
	})(App);


	return App.Routing;
}); 

