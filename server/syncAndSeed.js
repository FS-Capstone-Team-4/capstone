//IMPORT MODELS HERE
const db = require('./database');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  //USE MODELS TO SEED DATABASE IN HERE!!!
};

module.exports = { syncAndSeed };
