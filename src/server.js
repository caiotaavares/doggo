const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

// permite enviar e receber objetos na api
app.use(express.json());
app.use(routes);
app.listen(5000, () => {
    console.log('Aplicação rodando na porta 5000');
});