import React from 'react';
import { MenuItem, Typography, Select, FormControl, InputLabel} from '@mui/material'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CardGrid from './CardGrid';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import {Box} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material";

const StateOptions = [
    { label: 'All', value: 'All' },
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' },
  ];
  
const RoleOptions = [
    { value: 'All', label: 'All' },
    { value: 'Senator', label: 'Senators' },
    { value: 'Representative', label: 'Representatives' },
    { value: 'Delegate', label: 'Delegates' },
  ];

const PartyOptions = [
    { value: 'All', label: 'All' },
    { value: 'R', label: 'Republican' },
    { value: 'D', label: 'Democrat' },
    { value: 'I', label: 'Independent' },
  ];

  const SortByOptions = [
    { value: 'State', label: 'State' },
    { value: 'Name', label: 'Name' },
  ];

const FourSelectOptions = () => {


  const [congressMembers, setCongressMembers] = useState([]);
  const [sortedMembers, setSortedMembers] = useState(congressMembers);
  const [state, setState] = React.useState('All');
  const [role, setRole] = React.useState('All');
  const [party, setParty] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Name');


  let filteredMembers = sortedMembers.filter((member) => {
    if (party !== "All" && member.party !== party) {
      return false;
    }
    if (state !== "All" && member.state !== state) {
      return false;
    }
    if (role !== "All" && !member.position.includes(role)) {
      return false;
    }
    return true;
  });

  const handleSortChange = () => {

    if (sortBy === "Name") {
      setSortedMembers(
        [...congressMembers].sort((a, b) => a.name.localeCompare(b.name))
      );
    } else if (sortBy === "State") {
      setSortedMembers(
        [...congressMembers].sort((a, b) => a.state.localeCompare(b.state))
      );
    }
  };

  const sortByName = () => {
    setSortBy("name");
    setSortedMembers(
        [...congressMembers].sort((a, b) => a.name.localeCompare(b.name))
      );
  };

  const sortByState = () => {
    setSortBy("state");
    setSortedMembers(
        [...congressMembers].sort((a, b) => a.state.localeCompare(b.state))
      );
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'state':
        setState(event.target.value);
        break;
      case 'role':
        setRole(event.target.value);
        break;
      case 'party':
        setParty(event.target.value);
        break;
      case 'sortBy':
        setSortBy(event.target.value);
        handleSortChange();
        break;
      default:
        break;
    }
  };

  
useEffect(() => {
    const fetchCongressMembers = async () => {
      const response = await axios.get("/api/congressmembers");
      setCongressMembers(response.data);
    };
    fetchCongressMembers();
    handleSortChange()
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 725, // Medium devices (tablets)
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Box sx= {{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: 1,
      },
    }}>
        <Typography variant='h2' sx={{
             [theme.breakpoints.down("sm")]: {
              fontSize: "10vw",
              textAlign: "center"
            },
        }}> View Congressmembers </Typography>
        <Paper >
          
      <FormControl sx={{
            margin: 1,
            minWidth: 120,
      }}>
        <InputLabel id="option1-select-label">State</InputLabel>
        <Select
          labelId="option1-select-label"
          id="option1-select"
          name="state"
          value={state}
          onChange={handleChange}
        >
          {StateOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{
            margin: 1,
            minWidth: 120,
      }}>
        <InputLabel id="option2-select-label">Role</InputLabel>
        <Select
          labelId="option2-select-label"
          id="option2-select"
          name="role"
          value={role}
          onChange={handleChange}
        >
          {RoleOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{
            margin: 1,
            minWidth: 120,
      }}>
        <InputLabel id="option3-select-label">Party</InputLabel>
        <Select
          labelId="option3-select-label"
          id="option3-select"
          name="party"
          value={party}
          onChange={handleChange}
        >
          {PartyOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box sx={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             margin: '10px',
             '& > *': {
              margin: '5px !important',
            },
      }}>
      <Button margin='2px' variant="contained" color="primary" onClick={sortByName}>Show alphabetically by name</Button>
      <Button marginTop='200px' variant="contained" color="secondary" onClick={sortByState}>Show alphabetically by state/territory</Button>
      </Box>
      </Paper>
      <Paper sx={{   minHeight:"600px",
      minWidth:"100%",}}>
      <CardGrid data={filteredMembers} />
      </Paper>

</Box>
</ThemeProvider>

)
}

export default FourSelectOptions