import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, setErrors } from '../../actions/authAction';
import { clearCurrentProfile } from '../../actions/profileActions';
import PropTypes from 'prop-types';
import LoginModel from './LoginModel';
import RegisterModel from './RegisterModel';


class Navbar extends Component {

	onLogoutClick(e){
		e.preventDefault();
		this.props.clearCurrentProfile();
		this.props.logoutUser();
	}

	setErrors(e){
		this.props.setErrors();
	}

	render(){

		const { user, isAuthenticated } = this.props.auth;
		
		const guestNavBar = (
			<ul className="navbar-nav ml-lg-auto text-center">
			  <li className="nav-item active  mr-lg-3">
	            <a style={{"cursor" : "pointer"}} className="nav-link" data-toggle="modal"
						aria-pressed="false" data-target="#exampleModal" onClick={this.setErrors.bind(this)}>Login
				</a>
	          </li>
			  <li className="nav-item active  mr-lg-3">
	            <a style={{"cursor" : "pointer"}} className="nav-link" data-toggle="modal"
						aria-pressed="false" data-target="#exampleModal1" onClick={this.setErrors.bind(this)}>Register
				</a>
	          </li>
	        </ul>
		);

		const authNavBar = (
			<ul className="navbar-nav ml-lg-auto text-center">
			  <li className="nav-item active  mr-lg-3">
	            <Link className="nav-link" to="/dashboard">Dashboard</Link>
	          </li>
	          <li className="nav-item mr-lg-3">
					<a className="nav-link" href="services.html">Services</a>
				</li>
	          <li class="dropdown nav-item mr-lg-3">
						<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle ">
							<img 
			            	className="rounded-circle"
			            	src={user.avatar} 
			            	title="You must have a Gravatar connected to your email to display an image"
			            	style={{ width : "25px", marginRight : "5px"}}
			            	alt='pravesh'
			            	/>
			            	{user.name}
						</a>
						<ul class="dropdown-menu" role="menu">
							<li class="nav-item">
								<a href="course.html" class="nav-link">Profile</a>
							</li>
							<li class="nav-item">
								<a href="#" 
								onClick={this.onLogoutClick.bind(this)} 
								class="nav-link">Logout</a>
							</li>
						</ul>
					</li>
	        </ul>
		);	
		

		return (
			<div>
			<header>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light py-sm-4 py-2">
						<h1>
							<a className="navbar-brand" href="index.html"> <i className="fab fa-affiliatetheme"></i>
								TestYourSkills
							</a>
						</h1>
						<button className="navbar-toggler ml-md-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							{isAuthenticated ? authNavBar : guestNavBar}
							
						</div>
					</nav>
				</div>
			</header>
			<section className="banner layer" id="home">
				<div className="container">
					<div className="banner-text">
						<div className="slider-info mb-4">
							<div className="agileinfo-logo">
								<h3>
									 Practice makes you better
								</h3>
							</div>
							<h3 className="txt-w3_agile mb-3"> Its time to master your skills</h3>
							<a href="course.html" className="mr-2"><i className="fas fa-graduation-cap"></i> Our Courses</a>
							<a href="about.html"><i className="fas fa-book"></i> Read More</a>
						</div>
						<div className="thim-click-to-bottom">
							<div className="rotate">
								<a href="#welcome" className="scroll">
									<i className="fas fa-angle-double-down"></i>
								</a>
							</div>
						</div>

					</div>
				</div>
			</section>
			<LoginModel />
			<RegisterModel />
			</div>
		)
	}
}

Navbar.propTypes = {
	logoutUser : PropTypes.func.isRequired,
	auth : PropTypes.object.isRequired,
	setErrors : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	auth : state.auth
}) 

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile, setErrors })(Navbar);