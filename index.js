const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const routes = require('./src/routes/Character.Routes');
const connectToDatabase = require('./src/database/database');

app.use(express.json());

app.use(cors());

app.use('/characters', routes);

connectToDatabase();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
