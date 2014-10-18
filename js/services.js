'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.value('version', '0.1')
.service('mainSvc', ['$log', function(log){
	
	function mainSvc() { 
		log.info('instantiating mainSvc');

	  	this.pages = [ 'pages/1.jpg', 
		  	'pages/2.jpg', 'pages/3.jpg', 'pages/4.jpg', 'pages/5.jpg', 'pages/6.jpg', 
		  	'pages/7.jpg', 'pages/8.jpg', 'pages/9.jpg','pages/10.jpg','pages/11.jpg',
		  	'pages/12.jpg' ];
	}

	var instance = new mainSvc();

	return instance; 

}])
  ;
