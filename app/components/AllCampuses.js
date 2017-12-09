import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCampuses, deleteCampusDispatcher } from '../reducers/campuses';
import { fetchStudents } from '../reducers/students';

class allCampuses extends Component {
  constructor() {
    super()
    this.deleteCampusHandler = this.deleteCampusHandler.bind(this);
  }

  componentWillMount () {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  deleteCampusHandler (id) {
    this.props.deleteCampusDispatcher(id);
  }

  render () {
  let campuses = this.props.campuses;
  return (
    <div className="mainCampusDiv">
      <h1 className="allCampusTitle">All Campuses</h1>
      <div id="button">
        <Link to="/addCampus">
          <button>Add New Campus</button>
        </Link>
      </div>
      <ul className="campusList">
      {
      campuses.map(campus => {
        return (
          <div className="campusImg" key={campus.id}>
            <li key={campus.id}>
            <h3 className="campusName">{campus.name}</h3>
              <Link to={`/campuses/${campus.id}`} >
                <img className="urlLink" src={`${campus.imageUrl}`} />
              </Link>
              <br />
              <button
              name="delete"
              onClick={() => (this.deleteCampusHandler(campus.id))}>
              Delete Campus
            </button>
              </li>
            </div>
          )
        })
      }
      </ul>
    </div>
    )
  }
}

/* --------------- CONTAINER ----------------------- */
const mapState = ({campuses}) => ({campuses});

const mapDispatch = { fetchCampuses, fetchStudents, deleteCampusDispatcher }

export default connect(mapState, mapDispatch)(allCampuses);
