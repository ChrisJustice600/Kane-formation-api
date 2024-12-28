const Participant = require('../models/Participant');

exports.getAllParticipants = async (req, res) => {
  try {
    const participants = await Participant.find();
    res.json(participants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createParticipant = async (req, res) => {
  const participant = new Participant(req.body);
  try {
    const savedParticipant = await participant.save();
    res.status(201).json(savedParticipant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getParticipantById = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    if (!participant) return res.status(404).json({ message: 'Participant not found' });
    res.json(participant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!participant) return res.status(404).json({ message: 'Participant not found' });
    res.json(participant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndDelete(req.params.id);
    if (!participant) return res.status(404).json({ message: 'Participant not found' });
    res.json({ message: 'Participant deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};