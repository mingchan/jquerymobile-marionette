define(['app/app', 'text!../../templates/app/page.html'],
function (App, pageTmpl){

	App.Page_About = (function(){
		
		var Page_About = {};
		
		var Layout = Backbone.Marionette.Layout.extend({
		});
	  
	  
		App.addInitializer(function(options){
			console.log ('Page_About-App.addInitializer', options)
		});
	
	  return Page_About;
	})();


	return App.Page_About;

});