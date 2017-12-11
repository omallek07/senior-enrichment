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

  componentDidMount () {
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  deleteCampusHandler (id) {
    this.props.deleteCampusDispatcher(id);
    this.props.fetchStudents();
  }

  render () {
  let campuses = this.props.campuses;
  return (
    <div className="mainDiv">
      <h1 className="title">All Campuses</h1>
        <Link to="/addCampus">
          <button className="button">Add New Campus</button>
        </Link>
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
              className="buttonDelete"
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
