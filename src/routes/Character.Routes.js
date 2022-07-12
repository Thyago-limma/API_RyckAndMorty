const express = require('express');

const controller = require('../controllers/controller');

const route = require('express').Router();

route.get('/Characters', controller.readAllCharactersController);

route.get('/find/:id', controller.readAllCharactersByIdController);

route.post('/create', controller.createCharacter);

route.put('/update/:id', controller.updateCharacter);

route.delete('/delete/:id', controller.deleteCharacter);

module.exports = route;
