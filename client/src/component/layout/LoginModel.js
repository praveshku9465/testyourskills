import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../../actions/authAction';
import TextInputGroup from '../common/TextInputGroup';

class LoginModel extends Component {

	constructor(){
		super();
		this.state = {
			email : '',
			password : '',
			errors : {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.errors){
			this.setState({
				errors : nextProps.errors
			});
		}
	}

	onChange(e){
		this.setState({[e.target.name] : e.target.value});
	}

	onSubmit(e){
		e.preventDefault();

		const newCred = {
			email : this.state.email,
			password : this.state.password
		}

		this.props.loginUser(newCred, (result) => {
			if(result){
				document.getElementById('hidePopUpBtn').click();
			}
		});

	}

	render() {

		const { errors } = this.state;

		return (
		  <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title text-uppercase" id="exampleModalLabel1">Login</h5>
						<button type="button" id="hidePopUpBtn" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form noValidate onSubmit={this.onSubmit} className="p-3">
							<div className="form-group">
								<label htmlFor="recipient-name" className="col-form-label">Email</label>
								<TextInputGroup 
					              type="email" 
					              placeholder="Eamil Address"
					              value={this.state.email}
					              onChange={this.onChange}
					              name="email"
					              error={errors.email}
					            />
							</div>
							<div className="form-group">
								<label htmlFor="recipient-name1" className="col-form-label">Password</label>
								<TextInputGroup 
					              type="password" 
					              placeholder="Password"
					              value={this.state.password}
					              onChange={this.onChange}
					              name="password"
					              error={errors.password}
					            />
							</div>
							<div className="right-w3l mt-4 mb-3">
								<input type="submit" className="form-control" value="Login"/>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		)
	}
}

LoginModel.propTypes = {
	loginUser : PropTypes.func.isRequired,
	auth : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth : state.auth,
	errors : state.errors
}) 

export default connect(mapStateToProps, {loginUser})(withRouter(LoginModel));