const request = require('supertest')
require('dotenv').config()

describe('Serverest API', () => {
  describe('GET /usuarios', () => {
    it('should return a success response with status 200', async () => {
      const response = await request('https://serverest.dev')
        .get('/usuarios')
      
      expect(response.status).toBe(200)
    })
  })
});
