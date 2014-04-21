'use strict';

var mindmaker = angular.module('mindMakerApp');

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

    $scope.question = new Question(5);
});