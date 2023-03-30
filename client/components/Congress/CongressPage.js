import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { formatDate, convertTerritory } from "../Functions";
import CongressMemberPage from "./CongressPageStyled";

const CongressPage = () => {
    const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
    const config = {
        headers: {
        "X-API-Key": token,
        },
    };

    const { CongressId } = useParams();

    const [singleMember, setSingleMember] = useState([]);
    let currentRole = {};

    useEffect(() => {
        const fetchSingleMember = async (memberId) => {
        const response = await axios.get(
            `https://api.propublica.org/congress/v1/members/${memberId}.json`,
            config
        );
        setSingleMember(response.data.results[0]);
        };
        fetchSingleMember(CongressId);
    }, []);
    console.log(singleMember, "single member");

    const [billsByMember, setBillsByMember] = useState([]);

    useEffect(() => {
      const fetchBillsByMember = async (memberId) => {
        const response = await axios.get(
          `https://api.propublica.org/congress/v1/members/${memberId}/bills/introduced.json`,
          config
        );
        setBillsByMember(response.data.results[0].bills);
      };
      fetchBillsByMember(CongressId);
    }, []);

    const [votesByMember, setVotesByMember] = useState([]);

    useEffect(() => {
      const fetchVotesByMember = async (memberId) => {
        const response = await axios.get(
          `https://api.propublica.org/congress/v1/members/${memberId}/votes.json`,
          config
        );
        setVotesByMember(response.data.results[0].votes);
      };
      fetchVotesByMember(CongressId);
    }, []);

    //getting first start date from object
    const firstStartDate = (member) => {
        if (member.roles && member.roles.length > 0) {
            const dateStr = member.roles[member.roles.length-1].start_date;
            return formatDate(dateStr);
        } else {
            return 0;
        }
    }

    //Some officials have been elected multiple times but we want to grab the info from the current Congress
    const setCurrentRole = (member) => {
        if (member.roles && member.roles.length > 0) {
            currentRole = member.roles[0];
            return currentRole;
        } else {
            return 0;
        }
    }

    return (
        <div>
            <CongressMemberPage rep = {singleMember} bills = {billsByMember} votes = {votesByMember} role = {setCurrentRole(singleMember)}/>
        </div>
    )
}

export default CongressPage;