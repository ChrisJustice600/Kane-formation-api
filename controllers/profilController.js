const Profil = require('../models/Profil');

exports.getAllProfils = async (req, res) => {
  try {
    const profils = await Profil.find();
    res.json(profils);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProfil = async (req, res) => {
  const profil = new Profil(req.body);
  try {
    const savedProfil = await profil.save();
    res.status(201).json(savedProfil);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getProfilById = async (req, res) => {
  try {
    const profil = await Profil.findById(req.params.id);
    if (!profil) return res.status(404).json({ message: 'Profil not found' });
    res.json(profil);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfil = async (req, res) => {
  try {
    const profil = await Profil.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!profil) return res.status(404).json({ message: 'Profil not found' });
    res.json(profil);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteProfil = async (req, res) => {
  try {
    const profil = await Profil.findByIdAndDelete(req.params.id);
    if (!profil) return res.status(404).json({ message: 'Profil not found' });
    res.json({ message: 'Profil deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};