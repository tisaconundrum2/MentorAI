// const User = require('../models/user');

function chat(req, res) {
    try {
        if (req?.body['type'] === 'url_verification') {
            return res.send(req.body['challenge']);
        }
        res.json(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = chat
