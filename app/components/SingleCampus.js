import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campuses';

// import { addStory } from '../../redux/stories';


/* -----------    COMPONENT     ----------- */

class singleCampus extends React.Component {

  render() {
    return (
      <h1>hello</h1>
    )
  }
}

/* -----------    CONTAINER     ------------ */

// const mapState = ({ campuses, students }) => ({campuses, students})
  // const paramId = Number(ownProps.params.id);
  // return {
  //   campuses: campuses.find(campuses, campus => campus.id === paramId),
  // };

// const mapDispatch = dispatch => {
//   const campusID = props.match.params;
//   dispatch(fetchCampusByID(campusID));
// };


const mapState = ({ campuses, students }, ownProps) => {
  const paramId = Number(ownProps.match.params.campusId);
  return {
    campus: campuses.find(campus => campus.id === paramId)
  };
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(singleCampus);
