const server = require('./server');
const runner = require('supertest');
const fs = require('fs');

describe('server', () => {
  describe('should return the html contents of index.html', () => {
    test('when GET request is made to /', (done) => {
      runner(server.listener)
        .get('/')
        .then((response) => {
          const { text } = response;
          fs.readFile('handling/public/index.html', 'utf-8', (err, fileData) => {
            if (!err) {
              expect(text).toBe(fileData);
              done();
            } else { console.log(err); }
          });
        });
    });
  });
});
