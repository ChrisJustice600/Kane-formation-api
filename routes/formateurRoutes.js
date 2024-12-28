const express = require('express');
const router = express.Router();
const formateurController = require('../controllers/formateurController');

router.route('/')
  .get(formateurController.getAllFormateurs)
  .post(formateurController.createFormateur);

router.route('/:id')
  .get(formateurController.getFormateurById)
  .put(formateurController.updateFormateur)
  .delete(formateurController.deleteFormateur);

module.exports = router;