const fs = require('fs');
const hapi = require('hapi');
const path = require('path');
const rot13 = require('rot13-transform');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: process.argv[2] || 8080,
});

const inputFile = path.join(__dirname, 'wwwroot', 'input.txt');

server.route({
  path: '/',
  method: 'GET',
  handler: (request, response) => response(fs.createReadStream(inputFile).pipe(rot13())),
});

if (!module.parent) {
  server
    .start(() => {
      console.log(`Server running at: ${server.info.uri}`);
    });
}

module.exports = server;
