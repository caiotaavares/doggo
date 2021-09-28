const express = require('express');

require('./database');

const app = express();

app.listen(5000, () => {
    console.log('Aplicação rodando na porta 5000');
});