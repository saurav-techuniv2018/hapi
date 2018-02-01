const server = require('./server');

server.start()
  .then(() => {
    console.log(`Server running at: ${server.info.uri}`);
  })
  .catch(console.log);
