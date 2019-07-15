const mongoose = require('mongoose');

const highscoreSchema = new mongoose.Schema({
  name: String,
  roundsFought: Number,
  gold: Number
});

highscoreSchema.statics.format = (highscore) => {
  return {
    id: highscore.id,
    name: highscore.name,
    roundsFought: highscore.roundsFought,
    gold: highscore.gold
  }
};

const Highscore = mongoose.model('Highscore', highscoreSchema);

module.exports = Highscore;