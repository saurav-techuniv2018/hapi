const proxyServer = require('./proxy-server');
const supertest = require('supertest');

describe('proxyServer', () => {
  describe('route /proxy', () => {
    describe('route /proxy', () => {
      test('should return 200 statusCode', (done) => {
        supertest(proxyServer.listener)
          .get('/proxy')
          .then((response) => {
            expect(response.statusCode === 200);
            done();
          });
      });
      test('should return \'Proxy Route\'', (done) => {
        supertest(proxyServer.listener)
          .get('/proxy')
          .then((response) => {
            expect(response.text).toBe('Proxy Route');
            done();
          });
      });
    });
  });
});

