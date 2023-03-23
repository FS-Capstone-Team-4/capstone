import React from 'react';
import { Link } from 'react-router-dom';

const RepCard = props => {
  return (
    <div>
      <Link to={`/congressmembers/${props.member.CongressId}`}>
        <div>Name: {props.member.name}</div>
      </Link>
      <div>
        Party:
        {props.member.party === 'R'
          ? 'Republican'
          : props.member.party === 'D'
          ? 'Democrat'
          : 'Independent'}
      </div>
      <hr />
    </div>
  );
};

export default RepCard;
