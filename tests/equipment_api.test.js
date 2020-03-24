const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const equipmentDb = require('../db/equipment')

test('equipment are returned as json', async () => {
  await api
    .get('/api/equipment')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all equipment are returned', async () => {
  const response = await api.get('/api/equipment')
  expect(response.body.equipment.length).toBe(equipmentDb.length)
})

afterAll(() => {
  mongoose.connection.close()
})
