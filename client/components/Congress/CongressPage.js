import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { formatDate } from "../Functions";
import CongressMemberPage from "./CongressPageStyled";

const CongressPage = () => {
  const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
  const config = {
    headers: {
      "X-API-Key": token,
    },
  };
  

  const { CongressId } = useParams();

  const [congressId, setCongressId] = useState(CongressId)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [singleMember, setSingleMember] = useState([]);
  const [billsByMember, setBillsByMember] = useState([]);
  const [votesByMember, setVotesByMember] = useState([]);
  let currentRole = {};

  console.log("single member", singleMember);

   const fetchSingleMember = async (memberId) => {
    //single member
    ("searching for member," , memberId)
    const memberResponse = await axios.get(
      `https://api.propublica.org/congress/v1/members/${memberId}.json`,
      config
    );

    setLoading(false)

    setSingleMember(memberResponse.data.results[0]);
  };

  const fetchSingleMemberBills = async (memberId) => {
    //bills introduced
    console.log("searching for bills")
    const billsIntroResponse = await axios.get(
      `https://api.propublica.org/congress/v1/members/${memberId}/bills/introduced.json`,
      config
    );

    setBillsByMember(billsIntroResponse.data.results[0].bills);
  };

  const fetchSingleMemberVotes = async (memberId) => {
    console.log("searching for votes")

    const votesResponse = await axios.get(
      `https://api.propublica.org/congress/v1/members/${memberId}/votes.json`,
      config
    );

    setVotesByMember(votesResponse.data.results[0].votes);
  };

  useEffect(() => {
    if (congressId==="null") setError(true)
    fetchSingleMember(congressId)
  }, [congressId]);

  useEffect(() => {
    fetchSingleMemberBills(congressId)
  }, [singleMember]);

  useEffect(() => {
    fetchSingleMemberVotes(congressId)
  }, [billsByMember]);

  //getting first start date from object
  const firstStartDate = (member) => {
    if (member.roles && member.roles.length > 0) {
      const dateStr = member.roles[member.roles.length - 1].start_date;
      return formatDate(dateStr);
    } else {
      return 0;
    }
  };

  //Some officials have been elected multiple times but we want to grab the info from the current Congress
  const setCurrentRole = (member) => {
    if (member.roles && member.roles.length > 0) {
      currentRole = member.roles[0];
      return currentRole;
    } else {
      return 0;
    }
  };

  return (
    <CongressMemberPage
      loading={loading}
      error={error}
      rep={singleMember}
      bills={billsByMember}
      votes={votesByMember}
      role={setCurrentRole(singleMember)}
    />
  );
};

export default CongressPage;
