define(['app/app', 'app/helper', 'text!../../templates/app/content.about.html'],
function (App, Helper, contentTmpl){

	App.Page_About = (function(){
		var Page_About = {};
		
		var _pageName = 'about';		
		var _pageLayout = Helper.newPageLayout({
			name:_pageName,
			panelView: 		Helper.newPanelView(),			
			headerView: 	Helper.newHeaderView({name:_pageName, title:'Welcome to the About Page'}),
			contentView: 	Helper.newContentView({name:_pageName, template: _.template(contentTmpl, {}) }),
			footerView: 	Helper.newFooterView({name:_pageName, title:'About Footer'})
		});
							
		App.addInitializer(function(options){
			App.vent.trigger("page:about:started");
		});
	
		  return Page_About;
	})();

	return App.Page_About;
});
