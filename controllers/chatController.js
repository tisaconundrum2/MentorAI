// const User = require('../models/user');
const { App } = require('@slack/bolt');

function chat(req, res) {
    const app = new App({
        token: process.env.SLACK_BOT_TOKEN,
        signingSecret: process.env.SLACK_SIGNING_SECRET
    })

    try {
        if (req?.body['type'] === 'url_verification') {
            return res.send(req.body['challenge']);
        }
        app.event('app_mention', async ({ event, say }) => {
            await say(`Hi there, <@${event.user}>`)
        })

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
