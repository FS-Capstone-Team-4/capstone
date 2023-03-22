import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CongressMember = ({member}) => {

    return (
        <div>
            {/* <pre>members: {JSON.stringify(member, null, 2)}</pre> */}
            <p><Link to={`/congressmembers/${member.CongressId}`}>{member.name}</Link> ({member.party}) - {member.state}</p>
            {/* <button type="button" class="collapsible">Open Collapsible</button>
            <div class="content">
                <p>Lorem ipsum...</p>
            </div> */}
        </div>
    )
}

export default CongressMember;