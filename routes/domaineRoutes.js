const express = require('express');
const router = express.Router();
const domaineController = require('../controllers/domaineController');

router.route('/')
  .get(domaineController.getAllDomaines)
  .post(domaineController.createDomaine);

router.route('/:id')
  .get(domaineController.getDomaineById)
  .put(domaineController.updateDomaine)
  .delete(domaineController.deleteDomaine);


module.exports = router;