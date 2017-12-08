import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';


/* -----------    COMPONENT     ----------- */

class singleCampus extends Component {
  render() {
    let students = this.props.students;
    return (
      <div>
        <h1 className="singleCampusTitle">{this.props.campus.name}</h1>
        <ol>
        {
          students.map(student => {
            return (
            <div key={student.id}>
              <li key={student.id}>
              <Link className="mainLink" to={`/students/${student.id}`} >
              <h3>{student.name}</h3>
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

/* -----------    CONTAINER     ------------ */

const mapState = ({ campuses, students}, ownProps) => {
  const paramId = Number(ownProps.match.params.campusId);
  return {
    campus: campuses.find(campus => campus.id === paramId),
    students: students.filter(student => student.campusId === paramId)
  };
};

const mapDispatch = () => { return fetchStudents() };

export default connect(mapState, mapDispatch)(singleCampus);
