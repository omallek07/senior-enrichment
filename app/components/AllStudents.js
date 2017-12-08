import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/students';


class allStudents extends Component {
  render () {
    let students = this.props.students;
    return (
      <div>
      <h1>All Students</h1>
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

/* --------------- CONTAINER ----------------------- */
const mapState = ({students}) => ({students});
const mapDispatch = dispatch => { dispatch(fetchStudents()) }

export default connect(mapState, mapDispatch)(allStudents);
