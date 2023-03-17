import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const CongressMember = (member) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    return (
        <div>
            <p>{member.name} ({member.party}) - {member.state}</p>
            <button type="button" class="collapsible">Open Collapsible</button>
            <div class="content">
                <p>Lorem ipsum...</p>
            </div>
        </div>
    )
}

export default CongressMember;