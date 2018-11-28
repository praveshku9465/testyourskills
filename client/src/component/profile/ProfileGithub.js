import React, { Component } from 'react';


class ProfileGithub extends Component {
	
	
	render(){
	
		return (
			<div ref="myRef">
	            <hr />
	            <h3 class="mb-4">Latest Github Repos</h3>
	            <div  class="card card-body mb-2">
	              <div class="row">
	                <div class="col-md-6">
	                  <h4>
	                    {/*<Link to={repo.html_url} class="text-info" target="_blank"> Repository One
	                    </Link>*/}
	                  </h4>
	                  <p>Repository description</p>
	                </div>
	                <div class="col-md-6">
	                  <span class="badge badge-info mr-1">
	                    Stars: 44
	                  </span>
	                  <span class="badge badge-secondary mr-1">
	                    Watchers: 21
	                  </span>
	                  <span class="badge badge-success">
	                    Forks: 122
	                  </span>
	                </div>
	              </div>
	            </div>
	          </div>
		)
	}
}


export default ProfileGithub;