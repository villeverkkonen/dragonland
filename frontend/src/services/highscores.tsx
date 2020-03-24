import axios from 'axios'

const baseUrl: string = '/api/highscores'

export interface Highscore {
  name: string
  roundsFought: number
  hits: number
  gold: number
}

const getTopTenOrdered = () => {
  const request = axios.get(baseUrl)
  return request.then((res) => {
    return res.data.sort(compare).slice(0, 10)
  })
}

const newHighscore = (highscore: Highscore) => {
  const request = axios.post(baseUrl, highscore)
  return request.then((res) => {
    return res.data
  })
}

function compare(a: Highscore, b: Highscore) {
  return a.roundsFought - b.roundsFought || a.hits - b.hits || b.gold - a.gold
}

export default {
  getTopTenOrdered,
  newHighscore,
}
