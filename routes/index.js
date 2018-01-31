const greetServer = require('./greet-server');

greetServer.start((error) => {
  if (error) { console.log(error); } else {
    console.log(`Server running at: ${greetServer.info.uri}`);
  }
});
