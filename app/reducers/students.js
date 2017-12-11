import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const EDIT_STUDENT_INFO = 'EDIT_STUDENT_INFO';
const DELETE_STUDENT = 'DELETE_STUDENT';


/* --------- ACTION CREATORS ------------ */

const getAllStudents = students => ({ type: GET_ALL_STUDENTS, students })

const getStudentByID = student => ({ type: GET_STUDENT_BY_ID, student})

const addNewStudent = student => ({ type: ADD_NEW_STUDENT, student: student })

const editStudentInfo = student => ({ type: EDIT_STUDENT_INFO, student: student })

const deleteStudent = id => ({ type: DELETE_STUDENT, id })

/* ------------- REDUCER ------------ */

export default function reducer (students = [], action) {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return action.students;

    case GET_STUDENT_BY_ID:
      return students.filter(student => student.id === action.student.id);

    case ADD_NEW_STUDENT:
      return [action.student, ...students];

    case EDIT_STUDENT_INFO:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    case DELETE_STUDENT:
      return students.filter(student => student.id !== action.id);

    default:
      return students;
  }
}

/* ------------- DISPATCHERS ------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => dispatch(getAllStudents(res.data)))
  .catch(err => console.error('Fetching students unsuccessful', err));
};

export const fetchStudentByID = (studentId) => dispatch => {
  axios.get(`/api/students/${studentId}`)
  .then(res => dispatch(getStudentByID(res.data)))
  .catch(err => console.error('Fetching student by ID unsuccessful', err));
};

export const deleteStudentDispatcher = id => dispatch => {
  dispatch(deleteStudent(id));
  axios.delete(`/api/students/${id}`)
  .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};

export const addNewStudentDispatcher = student => dispatch => {
  axios.post('/api/students', student)
  .then(res => {
    return dispatch(addNewStudent(res.data))
  })
  .catch(err => console.error(`Creating user: ${student} unsuccesful`, err))
};

export const editStudentInfoDispatcher = (id, info) => dispatch => {
  axios.put(`/api/students/${id}`, info)
  .then(res => dispatch(editStudentInfo(res.data)))
  .catch(err => console.error(`Updating student: ${info} unsuccesful`, err));
};

export const addMultipleStudentsToCampusDispatcher = (campusId, students) => { students.map(student => {
  return (
    dispatch => {
      axios.put(`/api/students/${student.id}`, campusId)
      .then(res => dispatch(editStudentInfo(res.data)))
      .catch(err => console.error(`Updating student: ${campusId} unsuccesful`, err));
      }
    )
  });
}

