const server = require('./server');
const supertest = require('supertest');

describe('mainServer', () => {
  describe('route /proxy', () => {
    test('should return 200 statusCode', (done) => {
      supertest(server.listener)
        .get('/proxy')
        .then((response) => {
          expect(response.statusCode === 200);
          done();
        });
    });
    test('should return \'Proxy Route\'', (done) => {
      supertest(server.listener)
        .get('/proxy')
        .then((response) => {
          expect(response.text).toBe('Proxy Route');
          done();
        });
    });
  });
});

