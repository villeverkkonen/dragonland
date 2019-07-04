const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const middleware = require('./utils/middleware');
const equipmentRouter = require('./controllers/equipment');

app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static(__dirname + '/frontend/build'));
app.use(express.static('public'));
app.use(middleware.logger);
app.use('/api/equipment', equipmentRouter);

app.get('/*', function(req, res) {
  res.redirect('/');
});

app.use(middleware.error);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});