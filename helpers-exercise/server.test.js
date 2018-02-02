const runner = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('should return the rendered view', () => {
    test('when parameter name \'views\' is passed', () => {
      const name = 'Hapi';
      const suffix = '!!';
      const expectedHtmlString = `<html>\n    <head><title>Hello ${name}${suffix}</title></head>\n    <body>\n        Hello ${name}${suffix}\n    </body>\n</html>`;

      runner(server.listener)
        .get(`/?name=${name}&suffix=${suffix}`)
        .then((response) => {
          expect(response.text).toBe(expectedHtmlString);
        });
    });
  });
});
