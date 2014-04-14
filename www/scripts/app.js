'use strict';

angular.module('mindMakerApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'mindmaker.menu'
])

.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
