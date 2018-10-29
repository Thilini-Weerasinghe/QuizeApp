function Quiz(questions){
	this.score =0;
	this.question = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex];
	// body...
}

Quiz.prototype.isEnded = function () {
	return this.questions.length === this.questionIndex;
	// body...
}

Quiz.prototype.guess = function (answer) {
	 this.questionIndex++;

	 if(this.getQuestionIndex().correctAnswer(answer)){
	 	this.score++;
	 }
	// body...
}

