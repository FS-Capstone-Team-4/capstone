import axios from "axios";

//token

const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
const config = {
  headers: {
    "X-API-Key": token,
  },
};

//actions

const LOAD_BILLS = "LOAD_BILLS";

//action creators

const _loadBills = (payload) => {
  return {
    type: LOAD_BILLS,
    payload,
  };
};

//reducer

const initialState = { members: [] };

function MembersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BILLS:
      return { ...state, bills: action.payload };
    default:
      return state;
  }
}

//thunks

export const loadMembers = () => {
  return async (dispatch) => {
    try {
      console.log("loading members");
      const senateUrl =
        "https://api.propublica.org/congress/v1/bills/search.json?query={query}"

      const senateData = await axios.get(senateUrl, config);
      const houseData = await axios.get(houseUrl, config);


      const realDataSenate = senateData.data.results[0].members;
      const realDataHouse = houseData.data.results[0].members;

      const finalData = realDataSenate.concat(realDataHouse)

      dispatch(_loadMembers(finalData));
    } catch (e) {
      console.log(e);
    }
  };
};

export default MembersReducer;
