import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStudentInfoDispatcher } from '../reducers/students';
import { Link } from 'react-router-dom';

/* -----------    COMPONENT     ----------- */

class updateStudent extends Component {
  constructor (props) {
    super(props)
    this.state = this.props;
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (evt) {
    evt.preventDefault();
    let studentId = this.props.location.state.student.id
    let event = evt.target;
    let updatedStudentObj = {
      firstName: event.firstName.value,
      lastName: event.lastName.value,
      gpa: Number(event.gpa.value),
      email: event.email.value,
      campusId: Number(event.campus.value)
    }
    if (updatedStudentObj) {
      this.props.editStudentInfoDispatcher(studentId, updatedStudentObj);
    }
  }

  render() {
    let student = this.props.location.state.student;
    const campuses = this.props.campuses;
    return (
      <div>
        <h1 className="addPerson">Update {student.firstName}'s Details</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>First Name:</label>
            <div>
              <input name="firstName" type="text" placeholder={student.firstName} value={this.props.firstName} />
            </div>
          </div>
          <div>
            <label>Last Name:</label>
            <div>
              <input name="lastName" type="text" placeholder={student.lastName} value={this.props.lastName} />
            </div>
          </div>
          <div>
          <label>GPA:</label>
            <div>
              <input name="gpa" type="number" step="any" min="0" max="4" placeholder={student.gpa} value={this.props.gpa} />
            </div>
          </div>
          <div>
          <label>Email Address:</label>
            <div>
              <input name="email" type="text" placeholder={student.email} value={this.props.email} />
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
            <button type="submit">Submit</button>
          </div>
         </form>
      </div>
    )
  }
}

/* -----------    CONTAINER     ------------ */

const mapState = ({campuses}) => {
  return { campuses }
}

const mapDispatch = {editStudentInfoDispatcher}


export default connect(mapState, mapDispatch)(updateStudent);
