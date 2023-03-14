import axios from "axios";

//actions

const LOAD_MEMBERS = "LOAD_MEMBERS"

//action creators

const _loadStudents = (payload) => {
    return {
      type: LOAD_MEMBERS,
      payload,
    };
  };
  
//reducer

const initialState = { members: []}

function MembersReducer(state=initialState, action) {
    switch(action.type) {
        case LOAD_MEMBERS:
            return {members: action.payload}
        default: 
            return state;
    }
}

//thunks

export const loadStudents = () => {
    return async (dispatch) => {
        const senateUrl = "https://api.propublica.org/congress/v1/116/senate/members.json";
        const data = await axios.get(senateUrl, config)
        const realData = data.data.results[0]
        console.log(realData)
      const {data: students} = await axios.get('/api/students');
      dispatch(_loadStudents(students));
    };
  };

export default MembersReducer