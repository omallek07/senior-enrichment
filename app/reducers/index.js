/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

const initialState = {}

// Types of states
// allStudents: [],
// allCampuses: [],
// singleStudent: {},
// singleCampus: {},


//Types of actions
//createNewCampus
//deleteCampus
//createNewStudent
//deleteStudent
//editStudentInfo
//editCampusInfo


const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
};

export default rootReducer
