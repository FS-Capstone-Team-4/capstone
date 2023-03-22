import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SingleCongress from "./CongressMember";

const CongressList = () => {
    // const { congressMembers } = useSelector(state => state.congressMembers);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchCongressMembers());
    // },[])
    const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
  const config = {
    headers: {
      "X-API-Key": token,
    },
  };

    const [congressMembers, setCongressMembers] = useState([]);

    useEffect(() => {
        const fetchCongressMembers = async () => {
        const response = await axios.get("/api/congressmembers");
        setCongressMembers(response.data);
        };
        fetchCongressMembers();
    }, []);

    return (
        <div>
            <div id="myBtnContainer">
                <button class="btn active" onclick="filterSelection('all')"> Show all</button>
                <button class="btn" onclick="filterSelection('democrat')"> Democrats</button>
                <button class="btn" onclick="filterSelection('republican')"> Republicans</button>
            </div>
            <ul className='congress-list'>
                {congressMembers && congressMembers.map((member) => (
                    <li key={member.id}>
                        { member.party.equals('democrat') ? <div className="filterDiv democrat"><SingleCongress member={member}/></div> : ''}
                        { member.party.equals('republican') ? <div className="filterDiv republican"><SingleCongress member={member}/></div> : ''}
                        { member.party.equals('other') ? <div className="filterDiv other"><SingleCongress member={member}/></div> : ''}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CongressList;