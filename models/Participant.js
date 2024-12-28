const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  matricule_participant: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  date_naissance: { type: Date, required: true },
  profil: { type: String, required: true },
});

module.exports = mongoose.model('Participant', ParticipantSchema);