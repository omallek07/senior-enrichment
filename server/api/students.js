const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Students = models.Students;

// GET ALL STUDENTS
router.get('/', (req, res, next) => {
  Students.findAll()
  .then(allStudents => {
    res.json(allStudents);
  })
  .catch(next);
})

// POST /api/students
router.post('/', (req, res, next) => {
  Students.create(req.body)
    .then(student => {
     res.status(201).json(student)
    })
    .catch(err => { console.log(err) });
});

// GET STUDENT BY ID
router.get('/:studentId', (req, res, next) => {
  if (req.params.studentId) {
    Students.findById(req.params.studentId)
    .then(student => {
      res.json(student);
    })
    .catch(next);
  }
  // Create a custom error message if ID is not found.
});

router.put('/:studentId', (req, res, next) => {
  Students.update(req.body, {
    where: {
    id: req.params.studentId
    }
  })
  .then(updatedStudent => {
    res.json(updatedStudent);
  })
  .catch(next);
})

// DELETE /api/Students
router.delete('/:studentId', (req, res, next) => {
  const id = req.params.studentId;

  Students.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
