const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('@app');

describe('Auth routes', () => {
  describe('POST /v1/auth/register', () => {
    let newUser;
    beforeEach(() => {
      newUser = {
        name: faker.name.findName(),
        email: faker.internet.email().toLowerCase(),
        password: 'Password1',
      };
    });

    test('Should return 201 and successfully register user if data is ok', async () => {
      const response = await request(app).post('/v1/auth/register').send(newUser).expect(httpStatus.CREATED);

      const { user } = response.body;
      expect(user).not.toHaveProperty('password');
      expect(user).toEqual({ id: expect.anything(), name: newUser.name, email: newUser.email, role: 'user' });
    });
  });
});
