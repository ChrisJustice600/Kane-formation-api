const mongoose = require('mongoose');

const DomaineSchema = new mongoose.Schema({
  code_domaine: { type: String, required: true },
  libelle: { type: String, required: true },
});

module.exports = mongoose.model('Domaine', DomaineSchema);