const mongoose = require('mongoose');

const ProfilSchema = new mongoose.Schema({
  code_profil: { type: String, required: true },
  libelle: { type: String, required: true },
});

module.exports = mongoose.model('Profil', ProfilSchema);