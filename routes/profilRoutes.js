const express = require('express');
const router = express.Router();
const profilController = require('../controllers/profilController');

router.route('/')
  .get(profilController.getAllProfils)
  .post(profilController.createProfil);

router.route('/:id')
  .get(profilController.getProfilById)
  .put(profilController.updateProfil)
  .delete(profilController.deleteProfil);

module.exports = router;