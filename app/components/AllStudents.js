import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteStudentDispatcher, fetchStudents } from '../reducers/students';
import { Link } from 'react-router-dom';

class allStudents extends Component {
  constructor() {
    super()
    this.deleteStudentHandler = this.deleteStudentHandler.bind(this);
  }

  componentWillMount () {
    this.props.fetchStudents();
  }

  deleteStudentHandler (id) {
    this.props.deleteStudentDispatcher(id);
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
              <li>
                <Link className="mainLink" to={`/students/${student.id}`}>
                  <h3>{student.name} -------- {campuses.find(campus => campus.id === student.campusId).name}</h3>
                </Link>
                <button
                  name="delete"
                  onClick={() => (this.deleteStudentHandler(student.id))}>
                  Delete Student
                </button>
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

const mapDispatch = ({fetchStudents, deleteStudentDispatcher})

export default connect(mapState, mapDispatch)(allStudents);
