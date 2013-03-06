define(['app/app', 'app/helper', 'text!../../templates/app/content.landing.html'],
function (App, Helper, contentTmpl){
	
	App.Page_Landing = (function(){
		var Page_Landing = {};
		
		var _pageName = 'landing';		
		var _pageLayout = Helper.newPageLayout({
			name:_pageName,
			panelView: 		Helper.newPanelView(),
			headerView: 	Helper.newHeaderView({name:_pageName, title:'Welcome to the Landing Page'}),
			contentView: 	Helper.newContentView({name:_pageName, template: _.template(contentTmpl, {}) }),
			footerView: 	Helper.newFooterView({name:_pageName, title:'Landing Footer'})
		});
							
		App.addInitializer(function(options){
			App.vent.trigger("page:landing:started");
		});
	
	  return Page_Landing;
	
	})();
	
	return App.Page_Landing;
});