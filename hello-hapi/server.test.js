const server = require('./server');
const runner = require('supertest');

describe('server', () => {
  test('should return \'Hello hapi\'', (done) => {
    runner(server.listener)
      .get('/')
      .then((response) => {
        expect(response.text).toBe('Hello hapi');
        done();
      })
      .catch(console.log);
  });
});
