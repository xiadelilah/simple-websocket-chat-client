# simple-websocket-chat-client

A simple WebSocket chat client for Node.js.

## Installation

You can install this package via npm:

```bash
npm install simple-websocket-chat-client
```

## Usage

```javascript
const SimpleWebSocketChatClient = require('simple-websocket-chat-client');

// Create a new instance of the chat client
const chatClient = new SimpleWebSocketChatClient('ws://chat.example.com');

// Sending a message
chatClient.sendMessage('Hello, world!');
```

## API

### `new SimpleWebSocketChatClient(serverAddress)`

Creates a new instance of the WebSocket chat client.

- `serverAddress` (optional): The address of the WebSocket server to connect to. Defaults to `'ws://localhost:8080'`.

### `sendMessage(text)`

Sends a message to the chat server.

- `text`: The text of the message to send.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
