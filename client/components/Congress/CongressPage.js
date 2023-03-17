import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const CongressPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { congressMember } = useSelector(state => state.congressMember);

    return (
        congressMember &&
        <div>
            <h2>{congressMember.name} ({congressMember.party}) - {congressMember.state}</h2>
        </div>
    )
}

export default CongressPage;