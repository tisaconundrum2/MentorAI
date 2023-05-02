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

function get(req, res) {
    return res.send("<h1>Hello World</h1><p>MentorAI the AI oracle that will answer all your questions");
}

module.exports = {
    chat,
    get
}
