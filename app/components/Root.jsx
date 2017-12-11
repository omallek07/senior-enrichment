import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import singleCampus from './SingleCampus';
import singleStudent from './SingleStudent';
import addStudent from './AddStudent';
import addCampus from './AddCampus';
import updateStudent from './UpdateStudent';
import updateCampus from './UpdateCampus';
import updateCampusStudents from './UpdateCampusStudents';


const Root = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AllCampuses} />
        <Route exact path="/campuses" component={AllCampuses} />
        <Route exact path="/students" component={AllStudents} />
        <Route exact path="/addCampus" component={addCampus} />
        <Route exact path="/campuses/:campusId" component={singleCampus} />
        <Route exact path="/students/:studentId" component={singleStudent} />
        <Route exact path="/addStudent" component={addStudent} />
        <Route exact path="/updateStudent" component={updateStudent} />
        <Route exact path="/updateCampus" component={updateCampus} />
        <Route exact path="/updateCampusStudents" component={updateCampusStudents} />
        <Route component={AllCampuses} />
      </Switch>
    </div>
  </Router>
);

export default Root;

