import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import store from '../store';
import Navbar from './Navbar';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

export default class Root extends Component {
  render () {
    return (
      <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={AllCampuses} />
        <Route exact path="/campuses" component={AllCampuses} />
        <Route exact path="/students" component={AllStudents} />
      </div>
      </Router>
    );
  }
}


// <Navbar />
// <main>
//   <Switch>
//     <Route path="/new-channel" component={NewChannelEntry} />
//     <Route path="/channels/:channelId" component={MessagesList} />
//     <Redirect to="/channels/1" />
//   </Switch>
// </main>
