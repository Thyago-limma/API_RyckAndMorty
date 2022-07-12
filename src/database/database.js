const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/rickyAndMorty-db';

function connectToDatabase() {
  mongoose.connect(uri).then(() => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true, //
      })

      .then(() => console.log('MongoDb conectado com sucesso!!')) //quando conectar
      .catch(
        (error) => console.log(`error ao conectar com MongoDb, erro: ${error}`), //erro caso não conectar
      );
  });
}

module.exports = connectToDatabase;
