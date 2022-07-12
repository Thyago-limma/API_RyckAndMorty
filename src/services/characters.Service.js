const characters = require('../models/Characters');

const readAllCharactersUrl = async (req, res) => {
    const Characters = await characters.find();
    return Characters;
};

const readAllCharactersByIdUrl = async (id) => {
    const AllCharacters = characters.findById (id);
    return await AllCharacters;
};

const createCharacterUrl = async (newCharacter) => {
    const createdCharacter = await characters.create (newCharacter);
    return createdCharacter; 
};

const updateCharacterUrl = async (id, editCharacter) => await characters.find(id, editCharacter).setOptions({
    returnOriginal: false
});

const deleteCharacterUrl = async (id) => await characters.findByIdAndDelete(id);


module.exports = {
    readAllCharactersUrl,
    readAllCharactersByIdUrl,
    createCharacterUrl,
    updateCharacterUrl,
    deleteCharacterUrl,
};