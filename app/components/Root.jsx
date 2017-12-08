import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import singleCampus from './SingleCampus';
import singleStudent from './SingleStudent';


const Root = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={AllCampuses} />
      <Route exact path="/campuses" component={AllCampuses} />
      <Route exact path="/students" component={AllStudents} />
      <Route exact path="/campuses/:campusId" component={singleCampus } />
      <Route exact path="/students/:studentId" component={singleStudent } />
    </div>
  </Router>
);

export default Root
