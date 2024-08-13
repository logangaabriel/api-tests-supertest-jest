const request = require('supertest')
require('dotenv').config()

describe('Serverest API', () => {
  describe('POST /login', () => {
    it('should return a success response', async () => {
      const response = await request('https://serverest.dev')
        .post('/login')
        .send({
          email: process.env.USER_EMAIL, 
          password: process.env.USER_PASSWORD    
        })

      expect(response.status).toBe(200)
    })
  })
})
