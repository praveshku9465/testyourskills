import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registeruser } from '../../actions/authAction';
import TextInputGroup from '../common/TextInputGroup';

class RegisterModel extends Component {

	constructor(){
		super();
		this.state = {
			name : '',
			email : '',
			password : '',
			password2 : '',
			mobileNo : '',
			school : '',
			errors : {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.closePopup = this.closePopup.bind(this);
	}

	componentDidMount(){
		/*if(this.props.auth.isAuthenticated){
			this.props.history.push('/dashboard');
		}*/
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({errors : nextProps.errors});
		}
	}

	onChange(e){
		this.setState({[e.target.name] : e.target.value});
	}

	onSubmit(e){
		e.preventDefault()

		const newUser = {
			name : this.state.name,
			email : this.state.email,
			password : this.state.password,
			password2 : this.state.password2,
			mobileNo : this.state.mobileNo,
			school : this.state.school
		}

		this.props.registerUser(newUser, (result) => {
			if(result){
				document.getElementById('hidePopUp').click();
			}
		});
	}

	closePopup(e){
		this.setState({
			errors : {}
		})
	}


	render() {

		const { errors } = this.state;

		return (
		  <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title text-uppercase" id="exampleModalLabel1">Register Here</h5>
						<button type="button" id="hidePopUp" onClick={this.closePopup} className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form noValidate onSubmit={this.onSubmit} className="p-3">
							<TextInputGroup 
					              placeholder="Name"
					              value={this.state.name}
					              onChange={this.onChange}
					              name="name"
					              error={errors.name}
					            />

							<TextInputGroup 
					              type="tel" 
					              placeholder="Mobile No*"
					              value={this.state.mobileNo}
					              onChange={this.onChange}
					              name="mobileNo"
					              error={errors.mobileNo}
					        
					            />
					        <TextInputGroup 
					              type="text" 
					              placeholder="School Name*"
					              value={this.state.school}
					              onChange={this.onChange}
					              name="school"
					              error={errors.school}
					        
					            />    					            
				            
				            <TextInputGroup 
					              type="email" 
					              placeholder="Eamil Address"
					              value={this.state.email}
					              onChange={this.onChange}
					              name="email"
					              error={errors.email}
					              info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
					            />
				            
				            <TextInputGroup 
					              type="password" 
					              placeholder="Password"
					              value={this.state.password}
					              onChange={this.onChange}
					              name="password"
					              error={errors.password}
					        />
				            
				            <TextInputGroup 
					              type="password" 
					              placeholder="Confirm Password"
					              value={this.state.password2}
					              onChange={this.onChange}
					              name="password2"
					              error={errors.password2}
					            />
							<div className="right-w3l mt-4 mb-3">
								<input type="submit" className="form-control" value="Create account"/>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		)
	}
}

RegisterModel.propTypes = {
	auth : PropTypes.object.isRequired,
	registerUser : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	auth : state.auth,
	errors : state.errors
})

export default connect(mapStateToProps, { registerUser : registeruser })(withRouter(RegisterModel));