import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LandingPage from './LandingPage';

const App = () => {

  const [congressMembers, setCongressMembers] = useState([])

  useEffect(()=> {
    const fetchCongressMembers = async () => {
      const response = await axios.get('/api/congressmembers')
      setCongressMembers(response.data)
    }
    fetchCongressMembers();
  }, [])
  
  return (
    <div>
      <LandingPage congressMembers = {congressMembers} />
    </div>
  );
};

export default App;
