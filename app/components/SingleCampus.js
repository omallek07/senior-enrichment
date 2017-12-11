import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchStudents } from '../reducers/students';
import { fetchCampuses } from '../reducers/campuses';
import { connect } from 'react-redux';

/* -----------    COMPONENT     ----------- */

class singleCampus extends Component {

  componentDidMount () {
    this.props.fetchStudents();
    this.props.fetchCampuses();
  }

  render() {
    let {students, campus} = this.props;
    return (
      <div className="mainDiv">
        <h1 className="title">{campus.name}</h1>
        <br />
        <div>
          <h3 className="fontText">This campus currently has {students.length} students. </h3>
          <ol className="orderedList">
          {
            students.map(student => {
              return (
                <div key={student.id}>
                  <li key={student.id}>
                    <Link className="mainLink" to={`/students/${student.id}`} >
                    {student.name}
                    </Link>
                  </li>
                </div>
              )
            })
          }
          </ol>
          <br />
          <b>Description:</b> {campus.description}
          <br />
          <br />
          <div>
            <Link to={{ pathname: `/updateCampus`, state: {campus} }}>
              <button className="buttonCampus">Update Details</button>
            </Link>
            <Link to={{ pathname: `/updateCampusStudents`, state: {campus} }}>
              <button className="buttonCampus">Update Attending Students</button>
            </Link>
          </div>
          <br />
          <div>
            <Link className="mainLink" to="/campuses" >
              <button className="buttonCampus">Go Back</button>
            </Link>
          </div>
        </div>
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

const mapDispatch = { fetchStudents, fetchCampuses };

export default connect(mapState, mapDispatch)(singleCampus);
