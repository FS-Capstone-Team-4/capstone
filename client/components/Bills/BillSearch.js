import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SearchDisplay from "./SearchDisplay";
import { Link } from "react-router-dom";
import { formatDate } from "../Functions";

const BillSearch = () => {
  const [value, setValue] = useState(""); // Here we'll store the value of the search bar's text input
  const onChange = (ev) => {
    setValue(ev.target.value);
  };

  const search = (ev) => {
    ev.preventDefault();
    fetchBills(value);
    console.log("searched", value);
  };

  const filterBills = (ev) => {
    fetchBills(ev);
  }

  const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
  const config = {
    headers: {
      "X-API-Key": token,
    },
  };

  //bills by query
  const [bills, setBills] = useState([]);

  const fetchBills = async (query) => {
    console.log("fetching");
    const response = await axios.get(
      `https://api.propublica.org/congress/v1/bills/search.json?query=${query}`,
      config
    );
    setBills(response.data.results[0].bills);
  };

  const [showMore, setShowMore] = useState(Array(bills.length).fill(false));
  console.log(bills, "bills");

  return (
    <div>
      <form onSubmit={search}>
        <input
          placeholder="Search for a bill"
          value={value}
          name="username"
          onChange={onChange}
        />
        <button> Search </button>
      </form>
      <div>
          <label>Or show bills on these popular topics: </label>
          <select onChange={e => filterBills(e.target.value)}>
              <option value="">-</option>
              <option value="climate">Climate</option>
              <option value="immigration">Immigration</option>
              <option value="education">Education</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="civil rights">Civil Rights</option>
          </select>
      </div>
      {bills.map((bill, index) => (
        <div key={index}>
        {bill.short_title}
        <button onClick={() => {
          const newShowMore = [...showMore];
          newShowMore[index] = !showMore[index];
          setShowMore(newShowMore);
        }}>
          {showMore[index] ? 'Show less' : 'Show more'}
        </button>
        {showMore[index] ? (
          <ul>
            <li>Introduced on {formatDate(bill.introduced_date)}</li>
            <li>For more information click <Link to={`/bills/${bill.bill_id}`}>here</Link></li>
          </ul>
        ) : ''}
        </div>
      ))}
    </div>
  );
};

export default BillSearch;
