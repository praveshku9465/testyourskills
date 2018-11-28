const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
	author : {
		type : Schema.Types.ObjectId,
		ref : 'users'
	},
	type : {
		type : String,
		enum : ['private', 'public'],
		default : 'public' 
	},
	relatedToSubject : {
		type : String,
		required : true,
		enum : ['Math', 'Science', 'English']
	},
	relatedToClass : {
		type : String,
		required : true,
		enum : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11', '12']
	},
	question : {
		type : String,
		required : true
	},
	answers : [String],
	correctAnswer : {
		type : String,
		required : true
	},
	level : {
		type : String,
		enum : ['easy', 'intermediate', 'hard'],
		default : 'easy'
	},
	date : {
		type : Date,
		default : Date.now
	}
	
});


module.exports = Questions = mongoose.model('questions', QuestionsSchema)