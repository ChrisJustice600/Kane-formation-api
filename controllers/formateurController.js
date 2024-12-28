const Formateur = require('../models/Formateur');

exports.getAllFormateurs = async (req, res) => {
  try {
    const formateurs = await Formateur.find();
    res.json(formateurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFormateur = async (req, res) => {
  const formateur = new Formateur(req.body);
  try {
    const savedFormateur = await formateur.save();
    res.status(201).json(savedFormateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getFormateurById = async (req, res) => {
  try {
    const formateur = await Formateur.findById(req.params.id);
    if (!formateur) return res.status(404).json({ message: 'Formateur not found' });
    res.json(formateur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateFormateur = async (req, res) => {
  try {
    const formateur = await Formateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!formateur) return res.status(404).json({ message: 'Formateur not found' });
    res.json(formateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteFormateur = async (req, res) => {
  try {
    const formateur = await Formateur.findByIdAndDelete(req.params.id);
    if (!formateur) return res.status(404).json({ message: 'Formateur not found' });
    res.json({ message: 'Formateur deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};