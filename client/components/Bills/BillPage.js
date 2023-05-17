import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import BillCard from "./BillPageStyled";


const BillPage = () => {

    const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
    const config = {
        headers: {
        "X-API-Key": token,
        },
    };

    const { bills_id } = useParams();
    const bill_array = bills_id.split('-');
    
    let vote = null;

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