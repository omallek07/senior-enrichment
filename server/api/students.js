const express = require('express');
const router = new express.Router();
const models = require('../db/models');
const Students = models.Students;

router.get('/', (req, res, next) => {
  Students.findAll()
  .then(allStudents => {
    res.json(allStudents);
  })
  .catch(next);
})

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

// POST /api/students
router.post('/', function (req, res, next) {
  Students.create(req.body)
    .then(student => res.json(student))
    .catch(next);
});

// DELETE /api/Students
router.delete('/:studentId', function (req, res, next) {
  const id = req.params.studentId;

  Students.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
