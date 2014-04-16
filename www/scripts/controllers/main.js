'use strict';

var mindmaker = angular.module('mindMakerApp');

mindmaker.controller('questionController', function ($scope) {

    var option = function (value, visible) {
        return {
            value: value,
            visible: visible
        };
    }

    var options = [
        option('', false),
        option('', false),
        option('', false),
        option('', false),
        option('', false),
    ];

    var optionAdder = {
        visible: true,
        text: 'Add answer option',
        currentlyShown: 0
    };

    $scope.optionAdder = optionAdder;
    $scope.options = options;

    $scope.showOption = function() {
        options[optionAdder.currentlyShown].visible = true;
        optionAdder.currentlyShown += 1;
        if (optionAdder.currentlyShown >= options.length) {
            optionAdder.visible = false;
        }
    };
});