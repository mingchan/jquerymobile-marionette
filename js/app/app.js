var JQMM = JQMM || {};

define([], function (){	 

	JQMM.App = (function (JQMM) {
		var App = new Backbone.Marionette.Application();

		var _routerStartedDeferred = $.Deferred();
		var _pageLlandingStartedDeferred = $.Deferred();

		App.vent.on ('router:started', function () {
			_routerStartedDeferred.resolve ();
		});
		
		App.vent.on ('page:landing:started', function () {
			_pageLlandingStartedDeferred.resolve ();
		});

		$.when (_routerStartedDeferred,_pageLlandingStartedDeferred).then (function () {
			App.Routing.changePage ('#page_landing');			
		});
		
		return App;
	})(JQMM);
	
	return JQMM.App;
});


