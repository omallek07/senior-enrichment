import React, { Component } from 'react';
import axios from 'axios';

export default class allCampuses extends Component {
  constructor () {
    super()
    this.state = {
      allCampuses: []
    }
  }
  componentDidMount () {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      this.setState({ allCampuses: campuses})
    });
  }

  render () {
    let campuses = this.state.allCampuses;
    return (
      <div>
      <ul>
      {
      campuses.map(campus => {
        return (
          <li key={campus.id}>
          <h1>{campus.name}</h1>
          </li>
        )
      })
    }
    </ul>
    </div>
    )
  }
}
