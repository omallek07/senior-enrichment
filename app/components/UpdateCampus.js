import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editCampusInfoDispatcher } from '../reducers/campuses';
import { editStudentInfoDispatcher, deleteStudentDispatcher } from '../reducers/students';

/* -----------    COMPONENT     ----------- */

class updateCampus extends Component {
  constructor () {
    super()
    this.submitHandlerCampus = this.submitHandlerCampus.bind(this);
    this.addStudentsCheckHandler = this.addStudentsCheckHandler.bind(this);
    this.removeStudentsCheckHandler = this.removeStudentsCheckHandler.bind(this);

  }

  addStudentsCheckHandler (evt) {
    let checkedStudentId = evt.target.value;
    let campusId = {campusId: this.props.location.state.campus.id}
    this.props.editStudentInfoDispatcher(checkedStudentId, campusId);
    console.log('student updated!');
  }

  removeStudentsCheckHandler (evt) {
    let checkedStudentId = evt.target.value;
    this.props.deleteStudentDispatcher(checkedStudentId);
    console.log('student deleted!');
  }

  submitHandlerCampus (evt) {
    evt.preventDefault();
    let campusId = this.props.location.state.campus.id
    let event = evt.target;
    let updatedCampusObj = {
      name: event.name.value,
      imageUrl: event.imageUrl.value,
      description: event.description.value
    }
    if (updatedCampusObj) {
      this.props.editCampusInfoDispatcher(campusId, updatedCampusObj);
    }
  }

  render() {
    let campus = this.props.location.state.campus;
    let students = this.props.students;
    let attendingStudents = students.filter(student => student.campusId === campus.id);
    let nonAttendingStudents = students.filter(student => student.campusId !== campus.id);

    return (
      <div>
        <h1 className="addPerson">Update {campus.name}'s Details</h1>
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
            <button type="submit">Submit</button>
            <br />
            <br />
          </div>
         </form>
          <div>
          <label>Add Students:</label>
          <div>
            <div>
            {
              nonAttendingStudents.map(student => {
                return (
                  <div key={student.id}>
                  <input type="checkbox" value={student.id} onClick={this.addStudentsCheckHandler} />
                  <label>{student.name}</label>
                  </div>
              )})
            }
          </div>
            </div>
            <label>Remove Students:</label>
            <div>
              <div>
              {
                attendingStudents.map(student => {
                  return (
                    <div key={student.id}>
                    <input type="checkbox" value={student.id} onClick={this.removeStudentsCheckHandler} />
                    <label>{student.name}</label>
                    </div>
                )})
              }
            </div>
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

const mapDispatch = {editCampusInfoDispatcher, editStudentInfoDispatcher, deleteStudentDispatcher}


export default connect(mapState, mapDispatch)(updateCampus);
