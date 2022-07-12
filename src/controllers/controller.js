const CharactersService = require('../services/characters.Service');
const mongoose = require('mongoose');

const readAllCharactersController = async (req, res) => {
  const allCharacters = await CharactersService.readAllCharactersUrl();
  if (allCharacters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Personagem não Cadastrado' });
  }
  res.send(allCharacters);
};

const readAllCharactersByIdController = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'ID inválido',
    });
  }

  const character = await CharactersService.readAllCharactersByIdUrl(id);

  if (!character) {
    return res.status(206);
  }

  res.send(character);
};

const createCharacter = async (req, res) => {
  const character = req.body;

  if (!character || !character.personagem || !character.imageUrl) {
    return res.status(400).send({
      message:
        'Você Não Preencheu Todos os campos Para Editar Esse Personagem!',
    });
  }

  const newCharacter = await CharactersService.createCharacterUrl(character);

  res.send(newCharacter);
};

const updateCharacter = async (req, res) => {
  const id = req.params.id;
  const updatedCharacter = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'ID inválido',
    });
  }

  const upChar = await CharactersService.updateCharacterUrl(id, updatedCharacter);
  
  res.send(upChar);

};

const deleteCharacter = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({
            message: 'ID inválido'
        });

        const character = await CharactersService.readAllCharactersByIdUrl(id);

        if (!character) {
            return res.status(206);
        }
    }
};

module.exports = {
  readAllCharactersController,
  readAllCharactersByIdController,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
