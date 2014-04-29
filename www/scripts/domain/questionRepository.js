var mindmaker = angular.module('mindMakerApp');

var QuestionRepository = function($http, applicationId, RESTsecretKey, userUUID) {

    var apiBaseUrl = 'https://api.backendless.com/v1';
    var appConfigHeaders = {
        'application-id': applicationId,
        'secret-key': RESTsecretKey,
        'Content-Type': 'application/json',
        'application-type': 'REST'
    }

    var getUserQuestions = function() {
        return $http({
            method: 'GET',
            url: apiBaseUrl + '/data/Question',
            headers: appConfigHeaders
        });
    }

    var store = function(question) {
        var dataToStore = {
            imei: userUUID,
            question: question.questionText
        };
        for(var i = 1; i <= question.options.length; i++) {
            dataToStore['option_' + i] = question.options[i - 1].optionValue;
        }

        return $http({
            method: 'POST',
            url: apiBaseUrl + '/data/Question',
            data: dataToStore,
            headers: appConfigHeaders
        });
    };

    return {
        getUserQuestions: getUserQuestions,
        store: store
    }
};

mindmaker.value('applicationId', '0B9BFEFD-B0A1-187C-FFAC-7B4638362D00');
mindmaker.value('RESTsecretKey', '0EAA29E9-9669-5578-FF44-88B423100200');
mindmaker.service('questionRepository', ['$http', 'applicationId', 'RESTsecretKey', 'UUID', QuestionRepository]);
