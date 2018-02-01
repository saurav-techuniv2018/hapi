const runner = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('should return the rendered view', () => {
    test('when parameter name \'views\' is passed', () => {
      const name = 'views';
      const expectedHtmlString = `<html>\n    <head><title>Hello ${name}</title></head>\n    <body>\n        Hello ${name}\n    </body>\n</html>`;

      runner(server.listener)
        .get('/?name=views')
        .then((response) => {
          expect(response.text).toBe(expectedHtmlString);
        });
    });
  });
});
