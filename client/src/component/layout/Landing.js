import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Landing extends Component {

	componentDidMount(){
		if(this.props.auth.isAuthenticated){
			this.props.history.push('/dashboard');
		}
	}


	render() {
		return (
		  <section className="services py-5">
			<div className="container py-sm-3">
				<h3 className="heading text-capitalize mb-lg-5 mb-4"> Services - <span>What We Offer</span> </h3>
				<div className="row service-grids">
					<div className="col-lg-4 col-md-6">
						<div className="service-grid1">
							<i className="fas fa-globe"></i>
							<h5>1</h5>
							<h4 className="mb-3">Free Online Courses</h4>
							<p>Aenean tristique, duiid blandit elt ultricies, ligula elit interd ures turpis, a bibendum lib.</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-md-0 mt-5">
						<div className="service-grid1">
							<i className="fas fa-book"></i>
							<h5>2</h5>
							<h4 className="mb-3">Digital Library</h4>
							<p>Aenean tristique, duiid blandit elt ultricies, ligula elit interd ures turpis, a bibendum lib.</p>				
						</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
						<div className="service-grid1">
							<i className="fab fa-digital-ocean"></i>
							<h5>3</h5>
							<h4 className="mb-3">Unlimited Courses</h4>
							<p>Aenean tristique, duiid blandit elt ultricies, ligula elit interd ures turpis, a bibendum lib.</p>
						</div>
					</div>
					<div className="ser-button mt-4">
						<a href="services.html">Explore all services</a>
					</div>
				</div>
			</div>
		</section>
		)
	}
}

Landing.propTypes = {
	auth : PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	auth : state.auth
})

export default connect(mapStateToProps, null)(withRouter(Landing));