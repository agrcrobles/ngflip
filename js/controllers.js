'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', ['$log','$scope', 'mainSvc', function(log, scope, mainSvc) {
  	log.info('instantiating MyCtrl2');

  	scope.svc = mainSvc;
  }]);