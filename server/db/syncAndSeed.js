//IMPORT MODELS HERE
const conn = require('./conn');
const CongressMember = require('./models/CongressMember');
const Bill = require('./models/Bill');
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
        "https://api.propublica.org/congress/v1/117/senate/members.json";
      const houseUrl =
        "https://api.propublica.org/congress/v1/117/house/members.json";
      // const billUrl = [
      //   "https://api.propublica.org/congress/v1/116/house/bills/enacted.json",
      //   "https://api.propublica.org/congress/v1/116/house/bills/vetoed.json",
      //   "https://api.propublica.org/congress/v1/115/house/bills/passed.json"
      // ];

      const senateData = await axios.get(senateUrl, config);
      const houseData = await axios.get(houseUrl, config);
      // const enactedBillData = await axios.get(billUrl[0], config);
      // const vetoedBillData = await axios.get(billUrl[1], config);
      // const passedBillData = await axios.get(billUrl[2], config);


      const realDataSenate = senateData.data.results[0].members;
      const realDataHouse = houseData.data.results[0].members;
      // const realEnactedBillData = enactedBillData.data.results[0].bills;
      // const realVetoedBillData = vetoedBillData.data.results[0].bills;
      // const realPassedBillData = passedBillData.data.results[0].bills;

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

      // const finalBillData = realPassedBillData.concat(realEnactedBillData.concat(realVetoedBillData));
      // finalBillData.forEach(e => {
      //   Bill.create({
      //     bill_id: e.bill_id,
      //     short_title: e.short_title,
      //     title: e.title,
      //     sponsor_id: e.sponsor_id,
      //     introduced_date: e.introduced_date,
      //     active: e.active,
      //     enacted: e.enacted,
      //     vetoed: e.vetoed,
      //     last_vote: e.last_vote,
      //     latest_major_action: e.latest_major_action,
      //     latest_major_action_date: e.latest_major_action_date,
      //   })
      // })
    }
    catch (e) {
      console.log(e)
    }

};

module.exports = { syncAndSeed };
