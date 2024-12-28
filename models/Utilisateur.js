const mongoose = require('mongoose');

const UtilisateurSchema = new mongoose.Schema({
  code_utilisateur: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);