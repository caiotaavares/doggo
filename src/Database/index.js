const Sequelize = require('sequelize');
const dbConfig = require('../Config/database');

const connection = new Sequelize(dbConfig);
connection.authenticate()
    .then(() => {console.log('conexão criada com sucesso')})
    .catch((error) => {console.log(error)});

module.exports = connection;