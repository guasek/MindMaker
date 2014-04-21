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
        templateUrl: 'views/new_question.html',
        controller: 'questionController'
    })
    .when('questions', {
        templateUrl: 'views/answered_question.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});
