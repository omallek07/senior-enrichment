import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewStudentDispatcher } from '../reducers/students';

/* -----------    COMPONENT     ----------- */

class addStudent extends Component {
  constructor (props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (evt) {
    evt.preventDefault();
    let bool = true;
    let event = evt.target;
    let newStudentObj = {
      firstName: event.firstName.value,
      lastName: event.lastName.value,
      gpa: Number(event.gpa.value),
      email: event.email.value,
    }

    for (let key in newStudentObj) {
      if (!newStudentObj[key]) { bool = false; }
    }

    newStudentObj.campusId = Number(event.campus.value)
    if (bool) {
      this.props.addNewStudentDispatcher(newStudentObj);
      this.props.history.push('/students');
    } else {
      alert('Please fill out all forms correctly! NOTE: GPA must be between 0.0 and 4.0!');
    }
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div className="mainDiv">
        <h1 className="title">Add New Student</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>First Name:</label>
            <div>
              <input name="firstName" type="text" placeholder="First Name" value={this.props.firstName} />
            </div>
          </div>
          <div>
            <label>Last Name:</label>
            <div>
              <input name="lastName" type="text" placeholder="Last Name" value={this.props.lastName} />
            </div>
          </div>
          <div>
          <label>GPA:</label>
            <div>
              <input name="gpa" type="number" step="any" min="0" max="4" placeholder="0" value={this.props.gpa} />
            </div>
          </div>
          <div>
          <label>Email Address:</label>
            <div>
              <input name="email" type="text" placeholder="Email" value={this.props.email} />
            </div>
          </div>
          <div>
          <label>Campus:</label>
            <div>
            <select name="campus" value={this.props.campus}>
            {
              campuses.map(campus => {
                return (
                  <option key={campus.id} value={campus.id}>
                  {campus.name}
                  </option>
                )
              })
            }
            </select>
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

const mapDispatch = {addNewStudentDispatcher}


export default connect(mapState, mapDispatch)(addStudent);
