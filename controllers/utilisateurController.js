const Utilisateur = require("../models/Utilisateur");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    if (!utilisateur)
      return res.status(404).json({ message: "Utilisateur not found" });
    res.json(utilisateur);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!utilisateur)
      return res.status(404).json({ message: "Utilisateur not found" });
    res.json(utilisateur);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUtilisateur = async (req, res) => {
  try {
    const utilisateur = await Utilisateur.findByIdAndDelete(req.params.id);
    if (!utilisateur)
      return res.status(404).json({ message: "Utilisateur not found" });
    res.json({ message: "Utilisateur deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUtilisateur = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier si l'utilisateur existe
    const utilisateur = await Utilisateur.findOne({ email });
    if (!utilisateur) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(
      password,
      utilisateur.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign(
      {
        id: utilisateur._id,
        role: utilisateur.role,
      },
      process.env.JWT_SECRET, // Clé secrète définie dans votre fichier .env
      { expiresIn: "1h" } // Durée de validité du token
    );

    // Réponse avec le token et les informations de l'utilisateur
    res.status(200).json({
      message: "Connexion réussie",
      token,
      utilisateur: {
        id: utilisateur._id,
        username: utilisateur.username,
        email: utilisateur.email,
        role: utilisateur.role,
      },
    });
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
