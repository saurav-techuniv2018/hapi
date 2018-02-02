const server = require('./server');
const supertest = require('supertest');

describe('route', () => {
  describe('/chicken/breed', () => {
    describe('should result in 400 statusCode', () => {
      test('when breed contains non alphanumeric characters', (done) => {
        supertest(server.listener)
          .get('/chickens/vanaraja_breed')
          .then((response) => {
            expect(response.statusCode).toBe(400);
            done();
          });
      });
    });
  });
});

