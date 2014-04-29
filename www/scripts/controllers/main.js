'use strict';

var mindmaker = angular.module('mindMakerApp');

mindmaker.controller('mainController', ['$scope', 'questionRepository', function ($scope, questionRepository) {
    questionRepository.getUserQuestions().
    success(function(data) {
        $scope.askedQuestions = AskedQuestions.fromJSON(data.data);
    });

}]);

mindmaker.controller('answerController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.question = $scope.askedQuestions.questions[$routeParams.questionId];
}]);

mindmaker.controller('submitController', [function () {
}]);

mindmaker.controller('questionController', ['$scope', 'questionRepository', function ($scope, questionRepository) {
    var questionPrototype = Question;
    $scope.questionAsked = function () {
        questionRepository.store($scope.question).success(function(){
            $scope.askedQuestions.addQuestion($scope.question);
            $scope.question = questionPrototype.newQuestion(5);
        });
    }
    $scope.questionPrototype = questionPrototype;
}]);