const Domaine = require('../models/Domaine');

exports.getAllDomaines = async (req, res) => {
  try {
    const domaines = await Domaine.find();
    res.json(domaines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createDomaine = async (req, res) => {
  const domaine = new Domaine(req.body);
  try {
    const savedDomaine = await domaine.save();
    res.status(201).json(savedDomaine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getDomaineById = async (req, res) => {
  try {
    const domaine = await Domaine.findById(req.params.id);
    if (!domaine) return res.status(404).json({ message: 'Domaine not found' });
    res.json(domaine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateDomaine = async (req, res) => {
  try {
    const domaine = await Domaine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!domaine) return res.status(404).json({ message: 'Domaine non trouvé' });
    res.json(domaine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteDomaine = async (req, res) => {
  try {
    const domaine = await Domaine.findByIdAndDelete(req.params.id);
    if (!domaine) return res.status(404).json({ message: 'Domaine not found' });
    res.json({ message: 'Domaine deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addDomaine = async (req, res) => {
  const { code_domaine, libelle, description } = req.body;
  const domaine = new Domaine({ code_domaine, libelle, description });

  try {
    await domaine.save();
    res.status(201).json(domaine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};