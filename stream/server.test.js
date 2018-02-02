const server = require('./server');
const supertest = require('supertest');

describe('route /', () => {
  describe('should return \'Gur Chefhvg bs Uncv-arff\'', () => {
    test('when input file contains \'The Pursuit of Hapi-ness\'', () => {
      supertest(server.listener)
        .get('/')
        .then((response) => {
          expect(response.text).toBe('The Pursuit of Hapi-ness');
        });
    });
  });
});

