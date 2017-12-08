import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_CAMPUS_BY_ID = 'GET_CAMPUS_BY_ID';
const ADD_NEW_CAMPUS = 'ADD_NEW_CAMPUS';
const EDIT_CAMPUS_INFO = 'EDIT_CAMPUS_INFO';
const DELETE_CAMPUS = 'DELETE_CAMPUS';
//Action to delete a student with matching campusId

/* --------- ACTION CREATORS ------------ */

const getAllCampuses = campuses => ({ type: GET_ALL_CAMPUSES, campuses })

const getCampusByID = campus => ({ type: GET_CAMPUS_BY_ID, campus})

const addNewCampus = campus => ({ type: ADD_NEW_CAMPUS, campus: campus })

const editCampusInfo = campus => ({ type: EDIT_CAMPUS_INFO, campus: campus })

const deleteCampus = id => ({ type: DELETE_CAMPUS, id })

/* ------------- REDUCER ------------ */

export default function reducer (campuses = [], action) {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return action.campuses;

    case ADD_NEW_CAMPUS:
      return [action.campus, ...campuses];

    case GET_CAMPUS_BY_ID:
      return campuses.filter(campus => campus.id === action.campus.id);

    // case EDIT_NEW_CAMPUS:
    //    return campuses.map(campus => (
    //   //   campus.id === campus.id ?
    //   // ))

    case DELETE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id);

    // case UPDATE:
    //   return users.map(user => (
    //     action.user.id === user.id ? action.user : user
    //   ));

    default:
      return campuses;
  }
}

/* ------------- DISPATCHERS ------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => dispatch(getAllCampuses(res.data)))
  .catch(err => console.error('Fetching campuses unsuccessful', err));
  };

export const fetchCampusByID = (campusId) => dispatch => {
  axios.get(`/api/campus/${campusId}`)
  .then(res => dispatch(getCampusByID(res.data)))
  .catch(err => console.error('Fetching campus by ID unsuccessful', err));
};

export const deleteCampusDispatcher = id => dispatch => {
  dispatch(deleteCampus(id));
  axios.delete(`/api/campuses/${id}`)
  .catch(err => console.error(`Removing campus: ${id} unsuccesful`, err));
  };

export const addNewCampusDispatcher = campus => dispatch => {
  axios.post('/api/campuses', campus)
  .then(res => dispatch(addNewCampus(res.data)))
  .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err))
};

export const editCampusInfoDispatch = (id, info) => dispatch => {
  axios.put(`/api/campuses/${id}`, info)
  .then(res => dispatch(editCampusInfo(res.data)))
  .catch(err => console.error(`Updating campus: ${info} unsuccesful`, err));
};
