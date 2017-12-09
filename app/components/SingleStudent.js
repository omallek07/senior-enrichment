import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchStudentByID, fetchStudents} from '../reducers/students';

/* -----------    COMPONENT    ----------- */

class singleStudent extends Component {
  componentWillMount () {
    // let studentId = this.props.match.params.studentId;
    // this.props.fetchStudentByID(studentId);
    fetchStudents();
  }

  render () {
    let {student, campuses} = this.props;
    let attendingCampus = campuses.find(campus => campus.id === student.campusId);

    return (
      <div>
        <h1 id="studentName">{`Details about ${student.name}`}</h1>
        <div id="button">
          <Link to={{ pathname: `/updateStudent`, state: {student} }}>
            <button>Update Student's Details</button>
          </Link>
        </div>
        <h3 className="studentDetails">{`${student.firstName} is currently attending `}
          <Link className="mainLink" to={`/campuses/${attendingCampus.id}`}>{`${attendingCampus.name}.`}
          </Link>
          </h3>
        <h3 className="studentDetails">{`${student.firstName}'s email is ${student.email}.`}</h3>
        <h3 className="studentDetails">{`${student.firstName} currently has a ${student.gpa} GPA.`}</h3>
    </div>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({students, campuses}, ownProps) => {
  const paramId = Number(ownProps.match.params.studentId);
  return {
    student: students.find(student => student.id === paramId),
    campuses
  };
};

const mapDispatch = { fetchStudentByID, fetchStudents };

export default connect(mapState, mapDispatch)(singleStudent);
