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
    alert('student updated!');
  }

  removeStudentsCheckHandler (evt) {
    let checkedStudentId = evt.target.value;
    this.props.deleteStudentDispatcher(checkedStudentId);
    alert('student deleted!');
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
            <b>Remove Students: NOTE: Removing student will permanently delete student! </b>
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
