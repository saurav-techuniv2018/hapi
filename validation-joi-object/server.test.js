const server = require('./server');
const supertest = require('supertest');

describe('route /login', () => {
  describe('should result in statusCode 400', () => {
    test('when payload does not contain any payload variables', (done) => {
      supertest(server.listener)
        .post('/login')
        .then((response) => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });
  });
  describe('should result in statusCode 400', () => {
    test('when payload does not contain required payload variables', (done) => {
      supertest(server.listener)
        .post('/login')
        .send({
          username: 'testUser',
        })
        .then((response) => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });
  });
  describe('should result in statusCode 400', () => {
    test('when payload does not contain required payload variables', (done) => {
      supertest(server.listener)
        .post('/login')
        .send({
          username: 'testUser',
          password: 'pass123',
        })
        .then((response) => {
          expect(response.statusCode).toBe(400);
          done();
        });
    });
  });
});

