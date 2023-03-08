//IMPORT MODELS HERE
const conn = require('./conn');

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  //USE MODELS TO SEED DATABASE IN HERE!!!
};

module.exports = { syncAndSeed };
