require('dotenv').config();
const { App } = require('@slack/bolt');

const app = new App({
    socketMode: true,
    token: process.env.BOT_TOKEN,
    appToken: process.env.APP_TOKEN,
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
    await app.start()
    console.log('Mentor AI Started!')
})()
