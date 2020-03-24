const highscoreRouter = require('express').Router()
const Highscore = require('../models/highscore')

highscoreRouter.get('/', async (req, res) => {
  try {
    const highscores = await Highscore.find({})
    if (highscores) {
      res.json(highscores.map(Highscore.format))
    }
  } catch (exception) {
    console.log(exception)
    res.status(500).json({ error: 'something went wrong...' })
  }
})

highscoreRouter.post('/', async (req, res) => {
  try {
    const body = req.body
    if (body.name === undefined) {
      return res.status(400).json({ error: 'name missing' })
    }

    const highscore = new Highscore({
      name: body.name,
      roundsFought: body.roundsFought,
      hits: body.hits,
      gold: body.gold,
    })

    const savedHighscore = await highscore.save()

    if (savedHighscore) {
      res.json(Highscore.format(savedHighscore))
    } else {
      res.status(404).end()
    }
  } catch (exception) {
    console.log(exception)
    res.status(500).json({ error: 'something went wrong...' })
  }
})

module.exports = highscoreRouter
