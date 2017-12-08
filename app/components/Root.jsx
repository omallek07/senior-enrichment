import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import singleCampus from './SingleCampus';
// import singleStudent from './SingleStudent';


/* --------------    COMPONENT     ---------------- */

const Root = () => (
  <Router>
    <div>
    <Navbar />
    <Route exact path="/" component={AllCampuses} />
    <Route exact path="/campuses" component={AllCampuses} />
    <Route exact path="/students" component={AllStudents} />
    <Route exact path="/campuses/:campusId" component={singleCampus } />
    </div>
  </Router>
);

/* -----------    CONTAINER     -------------- */

// const mapProps = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCampuses());
//     dispatch(fetchStudents());
//   }
// });

export default Root

// const Root = ({ children }) => (
//   <div>
//     <Navbar />
//     { children }
//   </div>
// )

// export default Root;

