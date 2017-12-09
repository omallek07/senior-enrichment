import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';
import { Link } from 'react-router-dom';


class allStudents extends Component {
  constructor() {
    super()
    this.deleteStudentHandler = this.deleteStudentHandler.bind(this);
  }

  deleteStudentHandler (evt) {
    //do something
  }

  render () {
    let {students, campuses} = this.props
    return (
      <div id="allStudentsDiv">
        <h1 id="allStudentsTitle">All Students</h1>
        <div id="button">
          <Link to="/addStudent">
            <button>Add New Student</button>
          </Link>
        </div>
        <ol>
        {
        students.map(student => {
          return (
            <div key={student.id}>
              <li key={student.id}>
              <Link className="mainLink" to={`/students/${student.id}`} >
              <h3>{student.name} -------- {campuses.find(campus => campus.id === student.campusId).name}</h3>
              </Link>
              </li>
            </div>
          )
        })
      }
      </ol>
    </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({students, campuses}) => ({students, campuses});
const mapDispatch = () => { return fetchStudents() }

export default connect(mapState, mapDispatch)(allStudents);
