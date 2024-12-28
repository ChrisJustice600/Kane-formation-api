const express = require('express');
const router = express.Router();
const participantController = require('../controllers/participantController');

router.route('/')
  .get(participantController.getAllParticipants)
  .post(participantController.createParticipant);

router.route('/:id')
  .get(participantController.getParticipantById)
  .put(participantController.updateParticipant)
  .delete(participantController.deleteParticipant);

module.exports = router;