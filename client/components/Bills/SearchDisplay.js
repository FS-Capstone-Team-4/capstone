import React from "react";

const SearchDisplay = ({ bills }) => {
  console.log(bills, "bills");

  bills
    ? bills.map((bill) => {
        <p>{bill.title}</p>;
      })
    : "loading";

  return (
    <div>
      {bills
        ? bills.map((bill) => {
           return <p>{bill.title}</p>;
          })
        : "loading"}
      hello
    </div>
  );
};

export default SearchDisplay;
