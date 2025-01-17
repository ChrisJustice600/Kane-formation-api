const mongoose = require('mongoose');

const domaineSchema = new mongoose.Schema({
    code_domaine: {
        type: String,
        required: true,
        unique: true
    },
    libelle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Domaine', domaineSchema);