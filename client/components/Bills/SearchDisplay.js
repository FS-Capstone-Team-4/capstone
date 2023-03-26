// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const SearchDisplay = ({ bills }) => {
//   console.log(bills, "bills");
//   const [showMore, setShowMore] = useState(Array(bills.length).fill(false));

//   return (
//     <div>
//       {bills
//         ? bills.map((bill, index) => (
//            <div key={index}>
//             {bill.short_title}
//             <button onClick={() => {
//               const newShowMore = [...showMore];
//               newShowMore[index] = !showMore[index];
//               setShowMore(newShowMore);
//             }}>
//               {showMore[index] ? 'Show less' : 'Show more'}
//             </button>
//             {showMore[index] ? (
//               <ul>
//                 <li>Introduced on {bill.introduced_date}</li>
//                 <li>For more information click <Link to={`/bills/${bill.bill_id}`}>here</Link></li>
//               </ul>
//             ) : ''}
//             </div>
//         ))
//         : "loading"}
//       hello
//     </div>
//   );
// };

// export default SearchDisplay;
