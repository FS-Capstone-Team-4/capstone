import React from 'react';
import { Link } from 'react-router-dom';

const SenatorCard = props => {
  function extractIdFromUrl(url) {
    const parts = url.split('/');
    return parts.pop().split('.')[0];
  }

  return (
    <div>
      <Link to={`/congressmembers/${extractIdFromUrl(props.member.photoUrl)}`}>
        <div>Name: {props.member.name}</div>
      </Link>
      <div>
        Party:
        {props.member.party}
      </div>
      <img src={props.member.photoUrl} />
      <hr />
    </div>
  );
};

export default SenatorCard;
