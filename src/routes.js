const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    // console.log(req);
    // console.log(res);
    return res.status(200).json('Api do doggo');
})

routes.post('/Users')

module.exports = routes;