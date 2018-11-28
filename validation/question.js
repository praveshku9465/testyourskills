const validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateQuestionInput(data){
	let errors = {};

	data.relatedToSubject = !isEmpty(data.relatedToSubject) ? data.relatedToSubject : '';
	data.relatedToClass = !isEmpty(data.relatedToClass) ? data.relatedToClass : '';
	data.question = !isEmpty(data.question) ? data.question : '';
	data.correctAnswer = !isEmpty(data.correctAnswer) ? data.correctAnswer : '';
	data.answers = !isEmpty(data.answers) ? data.answers : '';
	
	if(validator.isEmpty(data.relatedToSubject)){
		errors.relatedToSubject = "Related To Subject is Required field";
	}

	if(validator.isEmpty(data.relatedToClass)){
		errors.relatedToClass = "Related To Class is Required field";
	}

	if(validator.isEmpty(data.question)){
		errors.question = "Question is Required field";
	}

	if(validator.isEmpty(data.correctAnswer)){
		errors.correctAnswer = "Correct Answer is Required field";
	}

	if(validator.isEmpty(data.answers)){
		errors.answers = "Answers To Subject is Required field";
	}

	return {
		errors,
		isValid : isEmpty(errors)
	}
}