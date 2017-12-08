import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';

/* -----------    COMPONENT    ----------- */

class singleStudent extends Component {
  render () {
    let {student, campuses} = this.props;
    let attendingCampus = campuses.find(campus => campus.id === student.campusId);

    return (
      <div id="studentDiv">
        <h1 id="studentName">{`Details about ${student.name}`}</h1>
        <h3 className="studentDetails">{`${student.firstName} is currently attending `}
          <Link className="mainLink" to={`/campuses/{attendingCampus.id}`}>{`${attendingCampus.name}.`}
          </Link>
          </h3>
        <h3 className="studentDetails">{`${student.firstName}'s email is ${student.email} .`}</h3>
        <h3 className="studentDetails">{`${student.firstName} currently has a ${student.gpa} GPA.`}</h3>
      </div>
    )
  }
}

/* -------------- CONTAINER ------------------- */

const mapState = ({students, campuses}, ownProps) => {
  console.log(ownProps)
  const paramId = Number(ownProps.match.params.studentId);
  return {
    student: students.find(student => student.id === paramId),
    campuses
  };
};

const mapDispatch = () => { return fetchStudents() };

export default connect(mapState, mapDispatch)(singleStudent);
