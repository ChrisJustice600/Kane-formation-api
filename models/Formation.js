const mongoose = require('mongoose');

const FormationSchema = new mongoose.Schema({
  code_formation: { type: String, required: true },
  intitule: { type: String, required: true },
  domaine: { type: String, required: true },
  nombre_jours: { type: Number, required: true },
  annee: { type: Number, required: true },
  mois: { type: Number, required: true },
  formateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Formateur' },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participant' }],
});

module.exports = mongoose.model('Formation', FormationSchema);