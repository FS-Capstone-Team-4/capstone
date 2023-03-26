import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import CardGrid from "./CongressCard2";

const CongressList = () => {
  const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
  const config = {
    headers: {
      "X-API-Key": token,
    },
  };

  const [congressMembers, setCongressMembers] = useState([]);
  const [partyFilter, setPartyFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [sortMethod, setSortMethod] = useState("-");
  const [sortedMembers, setSortedMembers] = useState(congressMembers);

  useEffect(() => {
    const fetchCongressMembers = async () => {
      const response = await axios.get("/api/congressmembers");
      setCongressMembers(response.data);
    };
    fetchCongressMembers();
    // setSortedMembers(congressMembers)
  }, []);

  const filteredMembers = sortedMembers.filter((member) => {
    if (partyFilter !== "all" && member.party !== partyFilter) {
      return false;
    }
    if (stateFilter !== "all" && member.state !== stateFilter) {
      return false;
    }
    if (roleFilter !== "all" && !member.position.includes(roleFilter)) {
      return false;
    }
    return true;
  });

  const handleSortChange = (event) => {
    const selectedSortMethod = event.target.value;
    setSortMethod(selectedSortMethod);

    if (selectedSortMethod === "name") {
      setSortedMembers(
        [...congressMembers].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (selectedSortMethod === "state") {
      setSortedMembers(
        [...congressMembers].sort((a, b) => a.state.localeCompare(b.state))
      );
    }
  };

  return (
    <div>
      <h2>Members List</h2>
      <div>
        <label>Filter by party: </label>
        <select
          id="partyFilter"
          onChange={(e) => setPartyFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="D">Democrat</option>
          <option value="R">Republican</option>
          <option value="ID">Independent</option>
        </select>
      </div>
      <div>
        <label>Filter by role: </label>
        <select id="roleFilter" onChange={(e) => setRoleFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Representative">Representatives</option>
          <option value="Senator">Senators</option>
          <option value="Delegate">Delegates</option>
        </select>
      </div>
      <div>
        <label>Filter by state/territory: </label>
        <select
          id="stateFilter"
          onChange={(e) => setStateFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="AS">American Samoa</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="GU">Guam</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="MP">Northern Mariana Islands</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="VI">Virgin Islands</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
      </div>
      <div>
        <label>Sort by: </label>
        <select id="sort-by" value={sortMethod} onChange={handleSortChange}>
          <option value="-">-</option>
          <option value="name">Name</option>
          <option value="state">State</option>
        </select>
      </div>
        
            <CardGrid data={filteredMembers} />
    </div>
  );
};

export default CongressList;
