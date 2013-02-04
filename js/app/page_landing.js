define(['app/app', 'app/helper'],
function (App, Helper){
	
	App.Page_Landing = (function(){
		var Page_Landing = {};
			
		var _headerView = Helper.newHeaderView({name:'landing', title:'Landing Pgae'});
		var _pageLayout = Helper.newPageLayout({name:'landing', headerView: _headerView});
							
		App.addInitializer(function(options){
			App.vent.trigger("page:landing:started");
		});
	
	  return Page_Landing;
	
	})();
	
	return App.Page_Landing;
});