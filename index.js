const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const middleware = require('./utils/middleware');
const mongoose = require('mongoose')
const equipmentRouter = require('./controllers/equipment');
const highscoreRouter = require('./controllers/highscore');
const config = require('./utils/config')

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  keepAlive: 1000,
  connectTimeoutMS: 30000,
  reconnectTries: 30,
  reconnectInterval: 2000
};

mongoose
  .connect(config.mongoUrl, options)
  .then(() => {})
  .catch(err => {
    console.log(err);
  });
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static(__dirname + '/frontend/build'));
app.use(express.static('public'));
app.use(middleware.logger);
app.use('/api/equipment', equipmentRouter);
app.use('/api/highscores', highscoreRouter);

app.get('/*', function(req, res) {
  res.redirect('/');
});

app.use(middleware.error);

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

server.on('close', () => {
  mongoose.connection.close();
});