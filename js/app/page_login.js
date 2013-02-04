define(['app/app', 'text!../../templates/app/page.html'],
function (App, pageTmpl){

	App.Page_Login = (function(){
		var Page_Login = {};
		
		var Layout = Backbone.Marionette.Layout.extend({
		});
	  
		App.addInitializer(function(options){
			console.log ('Page_Login-App.addInitializer', options)
		});
	
	  return Page_Login;
	
	})();
	
	return App.Page_Login;
});