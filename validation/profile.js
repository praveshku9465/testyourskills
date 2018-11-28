const validator = require('validator');
const isEmpty = require('./is_empty');

module.exports = function validateProfileInput(data){
	let errors = {};

	data.handle = !isEmpty(data.handle) ? data.handle : '';
	data.status = !isEmpty(data.status) ? data.status : '';
	data.skills = !isEmpty(data.skills) ? data.skills : '';

	
	if(!validator.isLength(data.handle, {min : 2 , max : 40})){
		errors.handle = "Handle needs to between 2 and 4 chanracters";
	}

	if(validator.isEmpty(data.handle)){
		errors.handle = "Profile handle is Required";
	}

	if(validator.isEmpty(data.status)){
		errors.status = "Status is Required field";
	}

	if(validator.isEmpty(data.skills)){
		errors.skills = "Skill is Required field";
	}

	if(!isEmpty(data.website)){
		if(!validator.isURL(data.website)){
			errors.website = "Not a valid URL";
		}
	}

	if(!isEmpty(data.facebook)){
		if(!validator.isURL(data.facebook)){
			errors.facebook = "Not a valid URL";
		}
	}

	if(!isEmpty(data.twitter)){
		if(!validator.isURL(data.twitter)){
			errors.twitter = "Not a valid URL";
		}
	}

	if(!isEmpty(data.instagram)){
		if(!validator.isURL(data.instagram)){
			errors.instagram = "Not a valid URL";
		}
	}

	if(!isEmpty(data.linkdin)){
		if(!validator.isURL(data.linkdin)){
			errors.linkdin = "Not a valid URL";
		}
	}

	if(!isEmpty(data.youtube)){
		if(!validator.isURL(data.youtube)){
			errors.youtube = "Not a valid URL";
		}
	}

	return {
		errors,
		isValid : isEmpty(errors)
	}
}