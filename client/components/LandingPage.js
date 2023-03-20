import React from 'react';

import Map from './Map';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadMembers } from '../store/MembersReducer';
import { useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';

const LandingPage = ({congressMembers}) => {
  console.log("congressmembers", congressMembers)


  // const state = useSelector(state => state);
  // const dispatch = useDispatch()
  // useEffect(()=> {
  //   dispatch(loadMembers())
  // }, [])

  // console.log("state" , state)

   {/* <Navbar />
      <div>
        Map Area
        <Map />
      </div>
      <button onClick = {()=> console.log(congressMembers)}> Congress </button>
    </div> */}
  
  

  return (
      <Dashboard />
     
  );
};

export default LandingPage;
