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
      <div className="mainDiv">
        <h1 className="title">All Students</h1>
        <div id="button">
          <Link to="/addStudent">
            <button className="button">Add New Student</button>
          </Link>
        </div>
        <ol className="allListFlex">
        {
        students.map((student, i) => {
          return (
            <div key={student.id}>
              <li className="individualListFlex">
                <div>
                  <Link className="mainLink" to={`/students/${student.id}`}>
                  <b>{`${i + 1}.   ${student.name}`}</b>
                  </Link>
                </div>
                <div>
                  {campuses.find(campus => campus.id === student.campusId).name}
                </div>
                <div>
                  <button
                    className="buttonDelete"
                    name="delete"
                    onClick={() => (this.deleteStudentHandler(student.id))}>
                    Delete Student
                  </button>
                </div>
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
