const greetServer = require('./greet-server');
const runner = require('supertest');

describe('greetServer', () => {
  test('should return \'Hello\' if / is requested', ((done) => {
    runner(greetServer.listener)
      .get('/')
      .then((response) => {
        expect(response.text).toBe('Hello');
        done();
      });
  }));
  test('should return \'Hello Michael\' when /Michael is requested', (done) => {
    runner(greetServer.listener)
      .get('/Michael')
      .then((response) => {
        expect(response.text).toBe('Hello Michael');
        done();
      });
  });
});

