import React from 'react';

import Map from './Map';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadMembers } from '../store/MembersReducer';
import { useState } from 'react';
import axios from 'axios';
import Dashboard from './Dashboard';

const LandingPage = ({ congressMembers }) => {
  return <Dashboard />;
};

export default LandingPage;
