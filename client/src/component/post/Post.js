import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../actions/postActions';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import PostItem  from './PostItem';
import CommentForm from './CommentForm';
import Comment  from './Comment';

class Post extends Component {
	
	componentDidMount(){
		this.props.getPost(this.props.match.params.id);
	}

	render(){

		const { post, loading } = this.props.post;
		let postContent;

		if(post === null || loading || Object.keys(post).length === 0){
			postContent = <Spinner />;
		}
		else{
			postContent = <Comment comments={post.comments} />
		}

		return (
			  <div className="post">
			    <div className="container">
			      <div className="row">
			        <div className="col-md-12">
			          	<PostItem />
			          	<CommentForm />
			          <div className="comments">
			            {postContent}
			        </div>
			      </div>
			    </div>
			  </div> 
			  </div>     
		)
	}
}

Post.propTypes = {
	post : PropTypes.object.isRequired,
	getPosts : PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	post : state.post
})

export default connect(mapStateToProps, { getPost })(Post);