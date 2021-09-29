const Sequelize = require('sequelize');
const dbConfig = require('../Config/database');

const User = require('../Models/Users');

const connection = new Sequelize(dbConfig);
connection.authenticate()
    .then(() => {console.log('conexão criada com sucesso')})
    .catch((error) => {console.log(error)});

User.init(connection);

module.exports = connection;