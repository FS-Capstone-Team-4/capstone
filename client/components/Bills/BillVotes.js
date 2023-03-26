import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { formatDate } from "../Functions";

const BillVotes = (bill) => {
    let vote = {
        date: "01-01-10000",
    };

    //getting latest vote info from object
    const latestVote = ({ bill }) => {
        if (bill.votes && bill.votes.length > 0) {
            vote = bill.votes[0];
        }
        return vote;
    }

    return (
        <div>
            <h4>Vote info:</h4>
            <p>The last vote was in the {latestVote(bill).chamber} on {formatDate(vote.date)}</p>
            <ul>
                <li>The question was: {vote.question}</li>
                <li>The result was: {vote.result}</li>
                <li>
                    Breakdown of votes:
                    <ul>
                        <li>{vote.total_yes} said yes</li>
                        <li>{vote.total_no} said no</li>
                        <li>{vote.total_not_voting} did not vote</li>
                    </ul>
                </li>
            </ul>
            {/* <pre>this is the vote info: {JSON.stringify(vote, null, 2)}</pre>
            <pre>this is the bill info: {JSON.stringify(bill, null, 2)}</pre> */}
        </div>
    )
}

export default BillVotes;