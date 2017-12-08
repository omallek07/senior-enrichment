import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';
import { Link } from 'react-router-dom';


class allStudents extends Component {
  render () {
    let students = this.props.students;
    return (
      <div id="allStudentsDiv">
        <h1 id="allStudentsTitle">All Students</h1>
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

/* --------------- CONTAINER ----------------------- */
const mapState = ({students}) => ({students});
const mapDispatch = () => { return fetchStudents() }

export default connect(mapState, mapDispatch)(allStudents);
