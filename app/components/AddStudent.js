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
    const {addNewStudentDispatcher} = this.props;
    evt.preventDefault();
    let event = evt.target;
    let newStudentObj = {
      firstName: event.firstName.value,
      lastName: event.lastName.value,
      gpa: Number(event.gpa.value),
      email: event.email.value,
      campusId: Number(event.campus.value)
    }
    if (newStudentObj) {
      addNewStudentDispatcher(newStudentObj);
      this.props.history.push('/students');
    }
  }

  render() {
    const campuses = this.props.campuses;
    return (
      <div>
        <h1 className="addPerson">Add New Student</h1>
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
            <button type="submit">Submit</button>
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
