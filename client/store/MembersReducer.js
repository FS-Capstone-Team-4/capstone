import axios from "axios";
// import fs from 'node:fs/promises'
// import CongressMember from "../../server/db/models/CongressMember";

//token

const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
const config = {
  headers: {
    "X-API-Key": token,
  },
};

//actions

const LOAD_MEMBERS = "LOAD_MEMBERS";

//action creators

const _loadMembers = (payload) => {
  return {
    type: LOAD_MEMBERS,
    payload,
  };
};

//reducer

const initialState = { members: [] };

function MembersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MEMBERS:
      return { ...state, members: action.payload };
    default:
      return state;
  }
}

//thunks

export const loadMembers = () => {
  return async (dispatch) => {
    try {
      // let finalData = await CongressMember.findAll();
      // console.log("finalData", finalData)
      // dispatch(_loadMembers(finalData));
    } catch (e) {
      console.log(e);
    }
  };
};

export default MembersReducer;
