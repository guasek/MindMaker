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
    .when('/question/:questionId', {
        templateUrl: 'views/answered_question.html',
        controller: 'answerController'
    })
    .when('/submitted', {
        templateUrl: 'views/question_submitted.html',
        controller: 'submitController'
    })
    .otherwise({
        redirectTo: '/'
    });
});
