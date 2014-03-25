'use strict';

angular.module('mindMakerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'shoppinpal.mobile-menu'
])

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
