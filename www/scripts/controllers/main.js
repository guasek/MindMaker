'use strict';

var mindmaker = angular.module('mindMakerApp');

mindmaker.controller('mainController', ['$scope', function ($scope) {
    $scope.askedQuestions = [];
}]);

mindmaker.controller('answerController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.question = $scope.askedQuestions[$routeParams.questionId];
}]);

mindmaker.controller('questionController', function ($scope) {

    var Option = function () {
        this.optionValue = '';
    }

    var Question = function(maxOptions) {
        this.questionText = '';
        this.options = [];
        this.remainingOptions = maxOptions;
    };

    Question.prototype.addOption = function() {
        if (this.remainingOptions == 0) {
            return;
        }
        this.options.push(new Option());
        this.remainingOptions -= 1;
    };

    Question.newQuestion = function (maxOptions){
        return new Question(maxOptions);
    }

    $scope.questionPrototype = Question;
});