const Formation = require('../models/Formation');

exports.getAllFormations = async (req, res) => {
  try {
    const formations = await Formation.find().populate('formateur participants');
    res.json(formations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFormation = async (req, res) => {
  const formation = new Formation(req.body);
  try {
    const savedFormation = await formation.save();
    res.status(201).json(savedFormation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFormationById = async (req, res) => {
  try {
    const formation = await Formation.findById(req.params.id).populate('formateur participants');
    if (!formation) return res.status(404).json({ message: 'Formation not found' });
    res.json(formation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFormation = async (req, res) => {
  try {
    const formation = await Formation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!formation) return res.status(404).json({ message: 'Formation not found' });
    res.json(formation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFormation = async (req, res) => {
  try {
    const formation = await Formation.findByIdAndDelete(req.params.id);
    if (!formation) return res.status(404).json({ message: 'Formation non trouvée' });
    res.json({ message: 'Formation supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};