import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BillVotes from "./BillVotes";
import { formatDate } from "../Functions";
import BillCard from "./BillPageStyled";


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



    return (
        <div>
            <BillCard bill = {bill}/>
        </div>
    )
}

export default BillPage