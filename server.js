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

const express = require('express');
const bodyParser = require('body-parser');
const chatController = require('./controllers/chatController')
const PORT = process.env.PORT || 3000;


const app = express();
app.use(bodyParser.json());

app.post('/chat', chatController.chat);
app.get('/', chatController.get);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
