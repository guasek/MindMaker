'use strict';

var mindmaker = angular.module('mindMakerApp');

var Option = function (initialValue) {
    this.optionValue = initialValue;
}

Option.prototype.isEmpty = function () {
    return this.optionValue.length > 0;
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

var AskedQuestions = function (questions) {
    this.questions = questions;
};

AskedQuestions.prototype.filterEmptyAnswerOptions = function (question) {
    question.options = question.options.filter(function(option){
        return option.isEmpty();
    });
    return question;
};

AskedQuestions.prototype.addQuestion = function (question) {
    this.questions.push(this.filterEmptyAnswerOptions(question));
}

AskedQuestions.fromJSON = function (jsonData) {
    var asked = new AskedQuestions([]);
    for (var i = 0; i < jsonData.length; i++) {
        var restoredQuestion = new Question(5);
        restoredQuestion.questionText = jsonData[i].question;
        var options = [];
        if (jsonData[i].option_1.length > 0){
            options.push(new Option(jsonData[i].option_1))
        }
        if (jsonData[i].option_2.length > 0){
            options.push(new Option(jsonData[i].option_2))
        }
        restoredQuestion.options = options;
        asked.addQuestion(restoredQuestion);
    }
    return asked;
}

mindmaker.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $http({
            method: 'GET',
            url: 'https://api.backendless.com/v1/data/Question',
            headers: {
                'application-id': '0B9BFEFD-B0A1-187C-FFAC-7B4638362D00',
                'secret-key': '0EAA29E9-9669-5578-FF44-88B423100200',
                'Content-Type': 'application/json'
            }
        }
    ).
    success(function(data) {
        $scope.askedQuestions = AskedQuestions.fromJSON(data.data);
    });

}]);

mindmaker.controller('answerController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.question = $scope.askedQuestions.questions[$routeParams.questionId];
}]);

mindmaker.controller('submitController', [function () {
}]);

mindmaker.controller('questionController', function ($scope) {
    $scope.questionPrototype = Question;
});