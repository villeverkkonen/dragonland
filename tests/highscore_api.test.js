const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Highscore = require('../models/highscore');

const initialHighscores = [
  {
    name: 'Highscore1',
    roundsFought: 1,
    hits: 1,
    gold: 1
  },
  {
    name: 'Highscore2',
    roundsFought: 2,
    hits: 2,
    gold: 2
  },
];

beforeEach(async () => {
  await Highscore.deleteMany({});

  let highscoreObject = new Highscore(initialHighscores[0]);
  await highscoreObject.save();

  highscoreObject = new Highscore(initialHighscores[1]);
  await highscoreObject.save();
});

test('highscores are returned as json', async () => {
  await api
    .get('/api/highscores')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('all highscores are returned', async () => {
  const response = await api.get('/api/highscores');
  expect(response.body.length).toBe(initialHighscores.length);
});

test('highscores contains name Highscore1', async () => {
  const response = await api.get('/api/highscores');
  const names = response.body.map(r => r.name);
  expect(names).toContain('Highscore1');
});

test('a valid highscore can be added', async () => {
  const newHighscore = {
    name: 'Highscore3',
    roundsFought: 3,
    hits: 3,
    gold: 3
  };

  await api
    .post('/api/highscores')
    .send(newHighscore)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const response = await api.get('/api/highscores');
  const names = response.body.map(r => r.name);

  expect(response.body.length).toBe(initialHighscores.length + 1);
  expect(names).toContain('Highscore3');
});

afterAll(() => {
  mongoose.connection.close();
});