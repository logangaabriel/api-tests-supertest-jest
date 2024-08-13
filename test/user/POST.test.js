const { faker } = require('@faker-js/faker')
const request = require('supertest')
require('dotenv').config()

describe('Serverest API Test Suite', () => {
  describe('POST /usuarios', () => {
    it('should return a success response with status 201', async () => {
      const response = await request('https://serverest.dev')
        .post('/usuarios')
        .send({
          nome: faker.internet.userName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          administrador: "true"
        })

      expect(response.status).toBe(201)
    })
  })
})
