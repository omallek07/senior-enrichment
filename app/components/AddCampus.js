import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewCampusDispatcher } from '../reducers/campuses';

/* -----------    COMPONENT     ----------- */

class addCampus extends Component {
  constructor (props) {
    super(props)
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler (evt) {
    const {addNewCampusDispatcher} = this.props;
    evt.preventDefault();
    let event = evt.target;
    let newCampusObj = {
      name: event.name.value,
      imgUrl: event.imgUrl.value,
      description: event.description.value,
    }
    if (newCampusObj) {
      addNewCampusDispatcher(newCampusObj);
      this.props.history.push('/campuses');
    }
  }

  render() {
    console.log(this.props.campuses)
    return (
      <div>
        <h1>Add New Campus</h1>
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Campus Name</label>
            <div>
              <input name="name" type="text" placeholder="Campus Name" value={this.props.name} />
            </div>
          </div>
          <div>
            <label>Picture</label>
            <div>
              <input name="imgUrl" type="text" placeholder="Please paste IMG Url" value={this.props.imgUrl} />
            </div>
          </div>
          <div>
          <label>Description</label>
            <div>
              <textarea name="description" type="text" placeholder="Please describe campus:" value={this.props.description} />
            </div>
          </div>
          <div>
            <br />
            <button type="submit">Submit</button>
          </div>
         </form>
      </div>
    )
  }
}

/* -----------    CONTAINER     ------------ */

const mapState = ({campuses}) => ({campuses})

const mapDispatch = {addNewCampusDispatcher}


export default connect(mapState, mapDispatch)(addCampus);
