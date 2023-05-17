import React, { useEffect, useState } from "react";
import axios from "axios";
import FourSelectOptions from "./CongressSelectStyled";

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

      <FourSelectOptions />
  );
};

export default CongressList;
