import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';
import { Link } from 'react-router-dom';

class allCampuses extends Component {
    render () {
    let campuses = this.props.campuses;
    return (
      <div className="mainCampusDiv">
        <h1 className="allCampusTitle">All Campuses</h1>
        <ul className="campusList">
        {
        campuses.map(campus => {
          return (
            <div key={campus.id}>
              <li key={campus.id}>
              <h3 className="campusName">{campus.name}</h3>
              <Link to={`/campuses/${campus.id}`} >
              <img className="urlLink" src={`${campus.imageUrl}`} />
              </Link>
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
const mapDispatch = () => { return fetchCampuses() }

export default connect(mapState, mapDispatch)(allCampuses);
