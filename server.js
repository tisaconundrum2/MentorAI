/**
 * [x] Start a server
 * [x] POST request to receive. 
 * [x] Change the endpoint
 * [x] Move the POST method to it's own folder
 * [x] build out the validator 
 * [x] upload to git
 * [x] test through slack
 * [ ] Build connection to chat, have it respond back with full request body in JSON 
 */

const { App } = require("@slack/bolt");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.BOT_TOKEN,
    appToken: process.env.APP_TOKEN,
    signingSecret: process.env.SIGN_SECRET
});

app.event('app_mention', async ({ event, say }) => {
    try {
        await say(`Hi there, <@${event.user}>`);
    } catch (error) {
        console.error(error);
    }
});

app.message('hello', async ({ message, say }) => {
    await say(`Hi there, <@${message.user}>!`);
});


(async () => {
    const port = PORT
    // Start your app
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();
