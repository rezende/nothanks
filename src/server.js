const Server = require('boardgame.io/server').Server;
const NoThanks = require('./game').NoThanks;
const server = Server({ games: [NoThanks] });
server.run(8000);
