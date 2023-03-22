import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import BillSearch from "./BillSearch";


const BillGeneral = () => {

    return (
        <div>
            <h1>Look up a bill</h1>
        <BillSearch />
        </div>
    )
}

export default BillGeneral