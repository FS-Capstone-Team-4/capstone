//IMPORT MODELS HERE
const conn = require('./conn');
const CongressMember = require('./models/CongressMember');
const axios = require('axios');
const { UUID } = require('sequelize');

const syncAndSeed = async () => {
  await conn.sync({ force: true });

  //USE MODELS TO SEED DATABASE IN HERE!!!
  const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";

  const config = {
    headers: {
      "X-API-Key": token,
    },
  };
  
  
    try {
      console.log("loading members");
      const senateUrl =
        "https://api.propublica.org/congress/v1/116/senate/members.json";
      const houseUrl =
        "https://api.propublica.org/congress/v1/116/house/members.json";

      const senateData = await axios.get(senateUrl, config);
      const houseData = await axios.get(houseUrl, config);


      const realDataSenate = senateData.data.results[0].members;
      const realDataHouse = houseData.data.results[0].members;

      const finalData = realDataSenate.concat(realDataHouse)
      finalData.forEach(e => {
        let name = e.first_name + " " + e.last_name
        CongressMember.create({
          CongressId: e.id,
          name: name,
          party: e.party,
          state: e.state,
          position: e.title,
          congress: "116",
        })
      })
    }
    catch (e) {
      console.log(e)
    }

};

module.exports = { syncAndSeed };
