import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';


/* -----------    COMPONENT     ----------- */

class singleCampus extends React.Component {

  render() {
    let students = this.props.students;
    return (
      <div>
        <h1 className="singleCampusTitle">{this.props.campus.name}</h1>
        <ol>
        {
          students.map(student => {
            return (
            <li key={student.id}>
            <h3>{student.name}</h3>
            </li>
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

const mapDispatch = dispatch => { dispatch(fetchStudents()) };

export default connect(mapState, mapDispatch)(singleCampus);
