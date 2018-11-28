import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profileActions';

class Experience extends Component {

	onDelete(id){
		this.props.deleteExperience(id);
	}

	render() {
		const experience = this.props.experience.map(item => (
			<tr key={item._id}>
				<td>{item.company}</td>
				<td>{item.title}</td>
				<td><Moment format="YYYY/MM/DD">{item.from}</Moment> - {' '} 
					{item.to === null ? 
						('Now'):
						(<Moment format="YYYY/MM/DD">{item.to}</Moment>
					)}
				</td>	
				<td><button className="btn btn-danger" onClick={
					this.onDelete.bind(this, item._id)
				}>Delete</button></td>
			</tr>
		));

		return (
		  <div>
            <h4 className="mb-2">Experience Credentials</h4>
            <table className="table">
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Title</th>
                  <th>Years</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {experience}
              </tbody>
            </table>
          </div>
		)
	}
} 

Experience.propTypes = {
	deleteExperience : PropTypes.func.isRequired
}


export default connect(null, {deleteExperience})(Experience);