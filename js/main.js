var JQMM = JQMM || {};

require.config({
	baseUrl: './js/',
	paths: {		
		text: 				'libs/require-text-2.1.2',
		json:				'libs/require-json-0.3.0',
		jquery: 			'libs/jquery-1.10.1.min',
		jqmrouter: 			'libs/jquery.mobile.router-0.9.3.min',
		jqmobile: 			'libs/jquery.mobile-1.3.1.min',
		lodash: 			'libs/lodash-1.2.1.min',
		backbone: 			'libs/backbone-1.0.0.min',
		marionette: 		'libs/backbone.marionette-1.0.3.min',

		app_pre_jqm_init:	'app/pre_jqm_init',
		
		},
		
	shim: {	          
		jquery: {
			exports: '$'
		},
	    jqmrouter: {
	    	deps: ['app_pre_jqm_init' ]
	    },
	    app_pre_jqm_init: {
	    	deps: ['jquery' ]
	    },
	    jqmobile: {
	    	deps: ['app_pre_jqm_init', 'jqmrouter', 'jquery']
	    },
	    lodash: {
	    	exports: '_'
	    },
	    backbone: {
	    	deps: ['lodash', 'jquery'],
	        exports: 'Backbone'
	    },
	    marionette: {
	    	deps: ['backbone'],
	        exports: 'Marionette'
	    },
	    
	    
	}
});


//must load 'app/pre_jqm_init' & 'jqmrouter' before 'jqmobile'
define(['jquery', 'jqmrouter', 'app_pre_jqm_init', 'jqmobile', 'lodash', 'backbone', 'marionette'], 
	function () {		         
		require(['app/app', 'app/routing', 'app/page_landing', 'app/page_about', 'app/page_login', 
		'app/helper'], function () {
				$(function () {
					JQMM.App.start();
				});				
			});
		return JQMM ;
});


/*
 * loadCss
 */

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
}

loadCss ('js/libs/jquery.mobile-1.3.1.min.css');
