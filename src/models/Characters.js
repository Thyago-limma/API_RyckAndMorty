const mongoose = require('mongoose');

const CharactersSchema = new mongoose.Schema({
  personagem: { type: String, required: true },

  imageUrl: {
    type: String,
    required: true,
  },
});

const Characters = mongoose.model('characters', CharactersSchema);

module.exports = Characters;
