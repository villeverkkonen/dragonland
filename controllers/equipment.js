const equipmentRouter = require('express').Router();
const equipmentDb = require('../db/equipment');

equipmentRouter.get('/', (req, res) => {
  res.status(200)
    .send({
      equipment: equipmentDb
    });
});

// equipmentRouter.get('/random', (req, res) => {
//   const returnableEquipment = equipmentDb[Math.floor(Math.random() * equipmentDb.length)];
//   res.status(200)
//     .send({
//       equipment: returnableEquipment
//     });
// });

// equipmentRouter.get('/amount/:amount', (req, res) => {
//   let equipmentArray = [];
//   for (let i = 0; i < req.params.amount; i++) {
//     const equipment = equipmentDb[Math.floor(Math.random() * equipmentDb.length)];
//     if (!equipmentArray.includes(equipment)) {
//       equipmentArray.push(equipment);
//     } else {
//       i -= 1;
//     }
//   }
//   res.status(200)
//   .send({
//     equipment: equipmentArray
//   });
// });

module.exports = equipmentRouter;