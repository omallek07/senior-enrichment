// import React from 'react';
// import {BrowserRotuer as Router, Route} from 'react-router-dom';
// import { connect } from 'react-redux';
// import Root from './components/Root';
// import AllCampuses from './components/AllCampuses';
// import AllStudents from './components/AllStudents';
// import singleCampus from './components/SingleCampus';
// import { fetchCampuses } from './reducers/campuses';
// import { fetchStudents } from './reducers/students';


// /* -----------------    COMPONENT     ------------------ */

// const Routes = ({ fetchInitialData }) => (
//   <Router>
//       <Route path="/" component={AllCampuses} onEnter={fetchInitialData}>
//       <Route path="/campuses" component={AllCampuses} />
//       <Route path="/students" component={AllStudents} />
//       <Route exact path="/campuses/:campusId" component={singleCampus } />
//       <Route path="*" component={Root} />
//     </Route>
//   </Router>
// );

// /* -----------------    CONTAINER     ------------------ */

// const mapProps = null;

// const mapDispatch = dispatch => ({
//   fetchInitialData: () => {
//     dispatch(fetchCampuses());
//     dispatch(fetchStudents());
//   }
// });

// export default connect(mapProps, mapDispatch)(Routes);
