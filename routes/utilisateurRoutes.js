const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

router.route('/')
  .get(utilisateurController.getAllUtilisateurs)
  .post(utilisateurController.createUtilisateur);

router.route('/:id')
  .get(utilisateurController.getUtilisateurById)
  .put(utilisateurController.updateUtilisateur)
  .delete(utilisateurController.deleteUtilisateur);

module.exports = router;