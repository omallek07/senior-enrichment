import axios from 'axios';

/* ------------ ACTIONS ------------ */

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS'
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';
const FIND_ALL_STUDENTS_BY_CAMPUS_ID = 'FIND_ALL__STUDENTS_BY_CAMPUS_ID'
const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const EDIT_STUDENT_INFO = 'EDIT_STUDENT_INFO';
const DELETE_STUDENT = 'DELETE_STUDENT';
// Action to delete a student with matching studentId

/* --------- ACTION CREATORS ------------ */

const getAllStudents = students => ({ type: GET_ALL_STUDENTS, students })

const getStudentByID = student => ({ type: GET_STUDENT_BY_ID, student})

const findAllStudentsByCampusID = students => ({ type: FIND_ALL_STUDENTS_BY_CAMPUS_ID, students})

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

    case FIND_ALL_STUDENTS_BY_CAMPUS_ID:
      return students.filter(student => student.campusId === action.student.campusId)

    // case EDIT_NEW_STUDENT:
      // return students.map(student => (
      //   student.id === student.id ?
      // ))

    case DELETE_STUDENT:
      return students.filter(student => student.id !== action.id);

    // case UPDATE:
    //   return users.map(user => (
    //     action.user.id === user.id ? action.user : user
    //   ));

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

// export const fetchStudentsByCampusID = (campusId) => dispatch => {
//   axios.get(`/api/students/${campusId}`)
//   .then(res => dispatch(findAllStudentsByCampusID(res.data)))
//   .catch(err => console.error('Fetching students by campus ID unsuccessful', err));
// }

export const deleteStudentDispatcher = id => dispatch => {
  dispatch(deleteStudent(id));
  axios.delete(`/api/students/${id}`)
  .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};

export const addNewStudentDispatcher = student => dispatch => {
  axios.post('/api/students', student)
  .then(res => dispatch(addNewStudent(res.data)))
  .catch(err => console.error(`Creating user: ${student} unsuccesful`, err))
};

export const editStudentInfoDispatch = (id, info) => dispatch => {
  axios.put(`/api/students/${id}`, info)
  .then(res => dispatch(editStudentInfo(res.data)))
  .catch(err => console.error(`Updating student: ${info} unsuccesful`, err));
};
