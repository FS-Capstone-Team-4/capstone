import React, { useEffect, useState } from "react";
import axios from "axios";
import LandingPage from "./LandingPage";
import { Routes, Route } from "react-router-dom";
import CongressList from "./Congress/CongressList";
import Dashboard from "./Dashboard";

const App = () => {
  const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
  const config = {
    headers: {
      "X-API-Key": token,
    },
  };

  //bills by query
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async (query) => {
      const response = await axios.get(
        `https://api.propublica.org/congress/v1/bills/search.json?query=${query}`,
        config
      );
      setBills(response.data.results[0].bills);
    };
    fetchBills("health care");
  }, []);

  // congress members general
  const [congressMembers, setCongressMembers] = useState([]);

  useEffect(() => {
    const fetchCongressMembers = async () => {
      const response = await axios.get("/api/congressmembers");
      setCongressMembers(response.data);
    };
    fetchCongressMembers();
  }, []);

  // bills by member
  const [billsByMember, setBillsByMember] = useState([]);

  useEffect(() => {
    const fetchBillsByMember = async (memberId) => {
      const response = await axios.get(
        `https://api.propublica.org/congress/v1/members/${memberId}/bills/introduced.json`,
        config
      );
      setBillsByMember(response.data.results[0].bills);
    };
    fetchBillsByMember("L000287");
  }, []);

  //select specific member (includes committees)
  const [singleMember, setSingleMember] = useState([]);

  useEffect(() => {
    const fetchSingleMember = async (memberId) => {
      const response = await axios.get(
        `https://api.propublica.org/congress/v1/members/${memberId}.json`,
        config
      );
      setSingleMember(response.data.results[0]);
    };
    fetchSingleMember("L000287");
  }, []);

  //select a bill's roll call vote (necessary for getting vote ration)
  const [rollCall, setRollCall] = useState([]);

  useEffect(() => {
    const fetchRollCall = async (chamber, RollCallNumber) => {
      const response = await axios.get(
        `https://api.propublica.org/congress/v1/115/${chamber}/sessions/1/votes/${RollCallNumber}.json`,
        config
      );
      setRollCall(response.data.results.votes.vote);
    };
    fetchRollCall("senate", "17");
  }, []);

  console.log("Roll call", rollCall);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
