const User = require('../Models/Users');

module.exports = {
    async save(req, res) {
        const {name, email, password} = req.body;

        const result = User.create({name, email, password});

        return res.status(200).send(result)
    }
}