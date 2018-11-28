import React from 'react';

export default () => {
	return (
		<footer>
	<div className="container-fluid p-sm-5 py-5">
		<div className="row footer-gap">
			<div className="col-lg-3 col-sm-6">
				<h3 className="text-uppercase mb-3">Address</h3>
				<address className="mb-0">
					<p><strong>Headquarters:</strong></p>
					<p className="mb-3"><i className="fas fa-map-marker"></i> 2466H 5th Street Parking, King <br/>Block, New York City.</p>
					<p><i className="fas fa-clock"></i> Timings : 10 a.m to 6 p.m</p>
					<p><i className="fas fa-phone"></i> +12 8976 2334</p>
					<p><i className="fas fa-envelope-open"></i> <a href="mailto:info@example.com">info@example.com</a></p>
					<p><i className="fas fa-fax"></i> +11 8976 2334 </p>
				</address>
			</div>
			<div className="col-lg-2 col-sm-6 mt-lg-0 mt-sm-0 mt-4 p-md-0">
				<h3 className="text-uppercase mb-3">Company</h3>
				<div className="links">
					<a className="text-capitalize" href="#"> Why Our Company</a>
					<a className="pt-2 text-capitalize" href="#"> Documentation</a>
					<a className="pt-2 text-capitalize" href="#"> Business</a>
					<div className="divider"></div>
					<a className="pt-2 text-capitalize" href="#"> Technical support</a>
					<a className="pt-2 text-capitalize" href="#"> 24/7 Service</a>
					<a className="pt-2 text-capitalize" href="#"> Feedback</a>
				</div>	
			</div>
			<div className="col-lg-2 col-md-3 col-sm-6 mt-lg-0 mt-sm-5 mt-4 p-md-0">
				<h3 className="text-uppercase mb-3">Support</h3>
				<div className="links">
					<a className="text-capitalize" href="#"> Contact Us</a>
					<a className="pt-2 text-capitalize" href="#"> Technical support</a>
					<a className="pt-2 text-capitalize" href="#"> 24/7 Service</a>
					<div className="divider"></div>
					<a className="pt-2 text-capitalize" href="#"> Privacy Policy</a>
					<a className="pt-2 text-capitalize" href="#"> Feedback & FAQ's</a>
					<a className="pt-2 text-capitalize" href="#"> Terms Of Use</a>
				</div>	
			</div>
			<div className="col-lg-3 col-md-5 col-sm-6 mt-lg-0 mt-sm-5 mt-4 pr-md-5">
				<h3 className="text-uppercase mb-3">Newsletter</h3>
				<p className="mb-4">Subscribe to Our Newsletter to get News, Amazing Offers & More</p>
				<form action="#" method="post">
					<input type="email" name="Email" placeholder="Enter your email..." required=""/>
					<button className="btn1"><i className="far fa-paper-plane"></i></button>
					<div className="clearfix"> </div>
				</form>
			</div>
			<div className="col-lg-2 col-md-4 col-sm-6 mt-lg-0 mt-sm-5 mt-4">
				<h3 className="text-uppercase mb-3"> Follow us</h3>
				<p className="mb-4">Follow us on social media</p>
				<ul className="social mt-lg-0 mt-3">
					<li className="mr-1"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
					<li className="mr-1"><a href="#"><span className="fab fa-twitter"></span></a></li>
					<li className="mr-1"><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
					<li className=""><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
					<div className="social-divider"></div>
					<li className="mr-1"><a href="#"><span className="fas fa-rss"></span></a></li>
					<li className="mr-1"><a href="#"><span className="fab fa-vk"></span></a></li>
					<li className="mr-1"><a href="#"><span className="fab fa-vimeo-v"></span></a></li>
					<li className=""><a href="#"><span className="fab fa-yahoo"></span></a></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="copyright pb-5 text-center">
		<p>© 2018 TestYourSkills. All Rights Reserved | Design by <a href="http://www.W3Layouts.com" target="_blank">W3Layouts</a></p>
	</div>
</footer>
	)
}