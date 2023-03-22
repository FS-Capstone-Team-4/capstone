import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";


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

    //dates from API are in MM-DD-YYYY format so we want to change to Month DD, YYYY format
    const formatDate = (dateStr) => {
        const dateObj = new Date(dateStr);
        const formattedDate = dateObj.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })
        return formattedDate;
    }

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
            <h2>{singleMember.first_name} {singleMember.last_name},
            {singleMember.current_party === 'D' ? ' Democrat' : ' Republican'}</h2>
            <p>Role: {setCurrentRole(singleMember).title}</p>
            <p>In office since: {firstStartDate(singleMember)}</p>
            <p>From: {currentRole.state}</p>
            <h4>Stats for the {currentRole.congress}th Congress:</h4>
            <h4>Voting Stats:</h4>
            <p>Total Votes: {currentRole.total_votes}</p>
            <p>Missed Votes: {currentRole.missed_votes}</p>
            <p>They've missed {currentRole.missed_votes_pct}% of votes</p>
            <p>Of these votes, they've aligned with their party {currentRole.votes_with_party_pct}% of the time</p>
            <p>The last time they voted was {formatDate(singleMember.most_recent_vote)}</p> 
            <h4>Bill Sponsorship:</h4>
            <p>They've sponsored {currentRole.bills_sponsored} bills</p>
            <p>and cosponsored {currentRole.bills_cosponsored} bills</p>
            <p>
                {billsByMember.map((bill, index) => (
                    <li key={index}>
                        {bill.short_title}
                    </li>
                ))}
            </p>
            <pre>bills: {JSON.stringify(billsByMember, null, 2)}</pre>
            {/* <pre>member: {JSON.stringify(singleMember, null, 2)}</pre> */}
        </div>
    )
}

export default CongressPage;