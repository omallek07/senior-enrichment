import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCampusInfoDispatcher } from '../reducers/campuses';
import { Link } from 'react-router-dom';

/* -----------    COMPONENT     ----------- */

class updateCampus extends Component {
  constructor () {
    super()
    this.submitHandlerCampus = this.submitHandlerCampus.bind(this);
  }

  submitHandlerCampus (evt) {
    evt.preventDefault();
    let bool = true;
    let campusId = this.props.location.state.campus.id
    let event = evt.target;
    let updatedCampusObj = {
      name: event.name.value,
      description: event.description.value
    }

    for (let key in updatedCampusObj) {
      if (!updatedCampusObj[key]) { bool = false; }
    }

    updatedCampusObj.imageUrl = event.imageUrl.value;

    if (bool) {
      this.props.editCampusInfoDispatcher(campusId, updatedCampusObj);
      alert('This campus has been updated!');
    } else {
      alert('Campus update was not successful. Please fill out name and description forms correctly!');
    }
  }

  render() {
    let campus = this.props.location.state.campus;

    return (
      <div className="mainDiv">
        <h1 className="addPerson">Update {campus.name}'s Details</h1>
        <div className="updateDetails">
          <form onSubmit={this.submitHandlerCampus}>
            <div>
              <label>Name:</label>
              <div>
                <input name="name" type="text" placeholder={campus.name} value={this.props.name} />
              </div>
            </div>
            <div>
              <label>Photo:</label>
              <div>
                <input name="imageUrl" type="text" placeholder={campus.imageUrl} value={this.props.imageUrl} />
              </div>
            </div>
            <div>
            <label>Description:</label>
              <div>
                <textarea name="description" type="text" placeholder={campus.description} value={this.props.description} />
              </div>
            </div>
            <div>
              <button
              className="button"
              type="submit">Submit</button>
              <br />
              <br />
            </div>
          </form>
          <div>
            <Link className="mainLink" to={`/campuses/${campus.id}`}>
              <button className="button">Go Back</button>
            </Link>
          </div>
         </div>
      </div>
    )
  }
}

/* -----------    CONTAINER     ------------ */

const mapState = ({campuses, students}) => {
  return { campuses, students }
}

const mapDispatch = {editCampusInfoDispatcher}


export default connect(mapState, mapDispatch)(updateCampus);
