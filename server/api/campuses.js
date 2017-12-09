const express = require('express')
const router = new express.Router();
const models = require('../db/models');
const Campuses = models.Campuses;

// GET ALL CAMPUSES
router.get('/', (req, res, next) => {
  Campuses.findAll()
  .then(allCampuses => {
    res.json(allCampuses);
  })
  .catch(next);
})

// POST /api/campuses
router.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then(campus => {
      res.status(201).json(campus)
    })
    .catch(err => { console.log(err) });
});


// GET CAMPUS BY ID
router.get('/:campusId', (req, res, next) => {
  if (req.params.campusId){
    Campuses.findById(req.params.campusId)
    .then(campus => {
      res.json(campus);
    })
    .catch(next);
  }
  //Create a custom error message if ID is not found
});


// DELETE /api/campuses
router.delete('/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campuses.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router;
