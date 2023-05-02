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
const { Chat } = require('./controllers/chatController')

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.BOT_TOKEN,
    appToken: process.env.APP_TOKEN,
    signingSecret: process.env.SIGN_SECRET
});

app.event('app_mention', Chat.appMention);
app.command('/question', Chat. question);
app.message('hello', Chat.hello);


(async () => {
    const port = PORT
    // Start your app
    await app.start(process.env.PORT || port);
    console.log(`⚡️ Mentor AI app is running on port ${port}!`);
})();
