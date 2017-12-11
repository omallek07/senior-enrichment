import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* -----------    COMPONENT    ----------- */

class singleStudent extends Component {

  render () {
    let {student, campuses} = this.props;
    let attendingCampus = campuses.find(campus => campus.id === student.campusId);

    return (
      <div className="mainDiv">
        <h1 className="title">{`Details about ${student.name}`}</h1>
        <div className="studentDetails">
          <div>
            {`${student.firstName} is currently attending `}
            <Link className="mainLink" to={`/campuses/${attendingCampus.id}`}>
              <b>
                {`${attendingCampus.name}.`}
              </b>
            </Link>
          </div>
          <div>
            {`${student.firstName}'s email is ${student.email}.`}
          </div>
          <div>
            {`${student.firstName} currently has a ${student.gpa} GPA.`}
          </div>
        </div>
      <div>
        <Link to={{ pathname: `/updateStudent`, state: {student} }}>
          <button className="button">Update Student's Details</button>
        </Link>
      </div>
      <br />
      <br />
      <div>
        <Link className="mainLink" to="/students" >
          <button className="button">Go Back</button>
        </Link>
      </div>
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

const mapDispatch = null;

export default connect(mapState, mapDispatch)(singleStudent);
