import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BillVotes from "./BillVotes";
import { formatDate } from "../Functions";


const BillPage = () => {

    const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
    const config = {
        headers: {
        "X-API-Key": token,
        },
    };

    const { bills_id } = useParams();
    //bills_id is both the bill_slug and the congress #, which are needed as separate variables for the API call
    const bill_array = bills_id.split('-');
    
    let vote = null;

    //bills by ID
    const [bill, setBill] = useState([]);

    useEffect(() => {
        const fetchBill = async (bill_array) => {
        const response = await axios.get(
            `https://api.propublica.org/congress/v1/${bill_array[1]}/bills/${bill_array[0]}.json`,
            config
        );
        setBill(response.data.results[0]);
        };
        fetchBill(bill_array);
    }, []);
    console.log(bill, "single bill");

    const latestVote = () => {
        if (bill.votes && bill.votes.length > 0) {
            vote = bill.votes[0];
        }
        return vote;
    }

    return (
        <div>
            <h2>Bill Details</h2>
            <p>Title: {bill.short_title}</p>
            <p>Introduced on: {formatDate(bill.introduced_date)}</p>
            <p>Sponsor: <Link to={`/congressmembers/${bill.sponsor_id}`}>{bill.sponsor}</Link> ({bill.sponsor_party})</p>
            <p>What's the latest?</p>
            <p>On {formatDate(bill.latest_major_action_date)}, the below happened:<br />{bill.latest_major_action}</p>
            <div>
                {latestVote() ?  <BillVotes bill={bill}/>: ''}
            </div>
        </div>
    )
}

export default BillPage