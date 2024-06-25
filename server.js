const jsonServer = require('json-server');
const path = require('path');
const express = require('express');

const server = express();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Ajustado para o caminho correto
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use('/api', router);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});