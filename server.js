/**
 * [x] Start a server
 * [x] POST request to receive. 
 * [x] Change the endpoint
 * [x] Move the POST method to it's own folder
 * [ ] build out the validator 
 * [ ] upload to git
 * [ ] test through slack
 */

const express = require('express');
const bodyParser = require('body-parser');
const chat = require('./controllers/chatController')

const app = express();
app.use(bodyParser.json());

app.post('/chat', chat);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
