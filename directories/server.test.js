const fs = require('fs');
const runner = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('should return public/file.html', () => {
    test('when request is made to /foo/bar/baz/file.html', (done) => {
      runner(server.listener)
        .get('/foo/bar/baz/file.html')
        .then((response) => {
          fs.readFile('directories/public/file.html', 'utf-8', (err, data) => {
            if (!err) {
              expect(response.text).toBe(data);
              done();
            }
          });
        });
    });
  });
});

