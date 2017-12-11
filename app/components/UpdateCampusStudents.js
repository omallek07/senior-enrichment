import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStudentInfoDispatcher, deleteStudentDispatcher } from '../reducers/students';
import { Link } from 'react-router-dom';


/* -----------    COMPONENT     ----------- */

class updateCampusStudents extends Component {
  constructor () {
    super()
    this.addStudentsCheckHandler = this.addStudentsCheckHandler.bind(this);
    this.removeStudentsCheckHandler = this.removeStudentsCheckHandler.bind(this);
  }

  addStudentsCheckHandler (evt) {
    let checkedStudentId = evt.target.value;
    let campusId = {campusId: this.props.location.state.campus.id}
    this.props.editStudentInfoDispatcher(checkedStudentId, campusId);
    alert(`Student added! Click 'Back' to see added student or check another student to continue adding!`);
  }

  removeStudentsCheckHandler (evt) {
    let checkedStudentId = evt.target.value;
    this.props.deleteStudentDispatcher(checkedStudentId);
    alert(`Student removed! Click 'Back' to see removed student or check another student to continue removing!`);
  }

  render() {
    let campus = this.props.location.state.campus;
    let students = this.props.students;
    let attendingStudents = students.filter(student => student.campusId === campus.id);
    let nonAttendingStudents = students.filter(student => student.campusId !== campus.id);
    return (
      <div className="mainDiv">
        <h1 className="title">Update Attending Students</h1>
        <div className="campusStudents">
          <div>
          <b>Add Students:</b>
            <div>
              {
                nonAttendingStudents.map(student => {
                  return (
                    <div key={student.id}>
                      <input className="updateCampusStudents" type="checkbox" value={student.id} onClick={this.addStudentsCheckHandler} />
                      <label>{student.name}</label>
                    </div>
                )})
              }
            </div>
          </div>
          <br />
          <div>
            <b>Remove Students: NOTE: This permanently deletes student! To re-assign, please visit individual student page! </b>
            <div>
              {
                attendingStudents.map(student => {
                  return (
                    <div key={student.id}>
                      <input className="updateCampusStudents" type="checkbox" value={student.id} onClick={this.removeStudentsCheckHandler} />
                      <label>{student.name}</label>
                    </div>
                )})
              }
              </div>
            </div>
          </div>
          <div>
            <Link className="mainLink" to={`/campuses/${campus.id}`} >
              <button className="button">Go Back</button>
            </Link>
          </div>
      </div>
    )
  }
}

/* -----------    CONTAINER     ------------ */

const mapState = ({campuses, students}) => {
  return { campuses, students }
}

const mapDispatch = { editStudentInfoDispatcher, deleteStudentDispatcher }


export default connect(mapState, mapDispatch)(updateCampusStudents);
