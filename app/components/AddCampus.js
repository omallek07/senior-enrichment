import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCampusDispatcher } from '../reducers/campuses';

/* -----------    COMPONENT     ----------- */

class addCampus extends Component {
  constructor () {
    super()
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (evt) {
    evt.preventDefault();
    let bool = true;
    let event = evt.target;
    let newCampusObj = {
      name: event.name.value,
      description: event.description.value,
    }
    for (let key in newCampusObj) {
      if (!newCampusObj[key]) { bool = false; }
    }
    newCampusObj.imageUrl = event.imageUrl.value;
    if (bool) {
      this.props.addNewCampusDispatcher(newCampusObj);
      this.props.history.push('/campuses');
    } else {
      alert('Please fill out all forms correctly!');
    }
  }

  render() {
    return (
      <div className="mainDiv">
        <h1 className="title">Add New Campus</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Campus Name</label>
            <div>
              <input name="name" type="text" placeholder="Campus Name" value={this.props.name} />
            </div>
          </div>
          <div>
            <label>Picture</label>
            <div>
              <input name="imageUrl" type="text" placeholder="Please paste IMG Url" value={this.props.imageUrl} />
            </div>
          </div>
          <div>
          <label>Description</label>
            <div>
              <textarea name="description" type="text" placeholder="Please describe campus:" value={this.props.description} />
            </div>
          </div>
          <div>
            <br />
            <button
            className="button"
            type="submit">Submit</button>
          </div>
         </form>
      </div>
    )
  }
}

/* -----------    CONTAINER     ------------ */

const mapState = ({campuses}) => ({campuses})

const mapDispatch = {addNewCampusDispatcher}


export default connect(mapState, mapDispatch)(addCampus);
