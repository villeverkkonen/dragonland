import axios from 'axios';
const baseUrl: string = '/api/highscores';

const getTopTenOrdered = () => {
  const request = axios.get(baseUrl);
  return request.then(res => {
    return res.data.sort(compare).slice(0, 10);
  });
};

const newHighscore = (highscore: Object) => {
  const request = axios.post(baseUrl, highscore);
  return request.then(res => { return res.data });
};

function compare(a: any, b: any) {
  return a.roundsFought - b.roundsFought || a.hits - b.hits || b.gold - a.gold;
}

export default {
  getTopTenOrdered,
  newHighscore
};