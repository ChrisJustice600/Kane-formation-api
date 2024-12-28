const mongoose = require('mongoose');

const FormateurSchema = new mongoose.Schema({
  code_formateur: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  domaine: { type: String, required: true },
  email: { type: String, required: true },
  numero_telephone: { type: String, required: true },
});

module.exports = mongoose.model('Formateur', FormateurSchema);