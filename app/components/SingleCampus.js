import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

/* -----------    COMPONENT     ----------- */

class singleCampus extends Component {
  render() {
    let {students, campus} = this.props;
    return (
      <div>
        <h1 className="singleCampusTitle">{campus.name}</h1>
        This campus currently has {students.length} students.
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
        Details about {campus.name}: {campus.description}
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

const mapDispatch = null;

export default connect(mapState, mapDispatch)(singleCampus);
