var Option = function (initialValue) {
    this.optionValue = initialValue;
}

Option.prototype.isEmpty = function () {
    return this.optionValue.length > 0;
}

var Question = function(maxOptions) {
    this.questionText = '';
    this.answer = null;
    this.selectedOption = null;
    this.options = [];
    this.remainingOptions = maxOptions;
};

Question.prototype.isAnswered = function() {
    return this.answer !== null || this.selectedOption !== null;
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

        var currentlyRestoring = jsonData[i];
        var restoredQuestion = new Question(5);

        restoredQuestion.questionText = currentlyRestoring.question;
        restoredQuestion.answer = currentlyRestoring.answer;
        restoredQuestion.selectedOption = currentlyRestoring.selected_option;

        var options = [];
        for (var j = 1; j <= 5; j++) {
            var optionName = 'option_' + j;
            if (currentlyRestoring[optionName] && currentlyRestoring[optionName].length > 0){
                options.push(new Option(currentlyRestoring[optionName]))
            }
        }
        console.log(restoredQuestion.isAnswered());
        restoredQuestion.options = options;
        asked.addQuestion(restoredQuestion);
    }
    return asked;
}