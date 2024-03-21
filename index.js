const WebSocket = require('ws');
const { v4: uuidv4 } = require('uuid');
const EmojiConvertor = require('emoji-js');

const emoji = new EmojiConvertor();
emoji.init_env();

const serverAddress = 'ws://localhost:8080'; // Placeholder, adjust as needed.
const ws = new WebSocket(serverAddress);

ws.on('open', function open() {
  console.log('Connected to the chat server.');
});

ws.on('message', function incoming(data) {
  const message = JSON.parse(data);
  console.log(`${message.author}: ${emoji.replace_colons(message.text)}`);
});

function sendMessage(text) {
  const message = {
    id: uuidv4(),
    text: text,
    timestamp: Date.now()
  };

  ws.send(JSON.stringify(message));
}

module.exports = sendMessage;
