define(['app/app', 'app/helper', 'text!../../templates/app/content.login.html'],
function (App, Helper, contentTmpl){

	App.Page_Login = (function(){
		var Page_Login = {};
		var _pageName = 'login';		
		var _pageLayout = Helper.newPageLayout({
			name:_pageName,
			panelView: 		Helper.newPanelView(),						
			headerView: 	Helper.newHeaderView({name:_pageName, title:'Welcome to the Login Page'}),
			contentView: 	Helper.newContentView({name:_pageName, template: _.template(contentTmpl, {}) }),
			footerView: 	Helper.newFooterView({name:_pageName, title:'Login Footer'})
		});
							
		App.addInitializer(function(options){
			App.vent.trigger("page:login:started");
		});
	
	
	  return Page_Login;
	
	})();
	
	return App.Page_Login;
});