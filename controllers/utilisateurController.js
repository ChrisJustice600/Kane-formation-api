const Utilisateur = require('../models/Utilisateur');

exports.getAllUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.find();
    res.json(utilisateurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUtilisateur = async (req, res) => {
  const utilisateur = new Utilisateur(req.body);
  try {
    const savedUtilisateur = await utilisateur.save();
    res.status(201).json(savedUtilisateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUtilisateurById = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findById(req.params.id);
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur not found' });
    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur not found' });
    res.json(utilisateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
    if (!utilisateur) return res.status(404).json({ message: 'Utilisateur not found' });
    res.json({ message: 'Utilisateur deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};