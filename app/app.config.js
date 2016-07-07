'use strict';

angular.
  module('observatoryApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          template: '<short-page></short-page>'
        }).
        when('/:dataId', {
          template: '<detail-page></detail-page>'
        }).
        otherwise('/home');
    }
  ]);