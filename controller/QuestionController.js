const Question = require('../models/Questions');
const validateQuestionInput = require('../validation/question');


/**
 * Create new question
 * @public
 */
exports.create = (req, res) => {

	const { errors, isValid } = validateQuestionInput(req.body);
	if(!isValid){
		return res.status(400).json(errors);
	}

    const question = new Question(req.body);
    question.save()
    	.then(question => {
    		    res.status(200).json(question);
    	})
    	.catch(err => {
    		res.status(400).json({status : 'error'})
    	}) 
};

exports.getAll = async (req, res, next) => {
  try {
    const questions = await Question.find({});
    res.status(200);
    res.json(questions);
  } catch (error) {
    res.status(400).json({status : 'error'})
  }
};