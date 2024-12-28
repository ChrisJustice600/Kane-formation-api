const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formationController');

router.route('/')
  .get(formationController.getAllFormations)
  .post(formationController.createFormation);

router.route('/:id')
  .get(formationController.getFormationById)
  .put(formationController.updateFormation)
  .delete(formationController.deleteFormation);

module.exports = router;