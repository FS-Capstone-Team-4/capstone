import React from 'react';
import Map from './Map';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadMembers } from '../store/MembersReducer';

const LandingPage = () => {

  const state = useSelector(state => state);
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(loadMembers())
  }, [])

  console.log("state" , state)


  return (
    <div>
      <h1>Landing Page</h1>
      <Navbar />
      <div>
        Map Area
        <Map />
      </div>
    </div>
  );
};

export default LandingPage;
