const equipmentRouter = require('express').Router();
const equipmentDb = require('../db/equipment');

equipmentRouter.get('/', (req, res) => {
  res.status(200)
    .send({
      equipment: equipmentDb
    });
});

module.exports = equipmentRouter;