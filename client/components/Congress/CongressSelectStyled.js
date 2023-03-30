import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel } from '@material-ui/core';
import { MenuItem, Typography, Select} from '@mui/material'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CardGrid from './CongressCard2';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    buttons: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    paper2: {
      minHeight:"600px",
      minWidth:"100%",

    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },

//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '10vh',
//     // flexDirection: 'column',

//   },
//   paper1: {
//     display: 'flex',
//     height: 200,
//     width: 200,
//     backgroundColor: 'red',
//     marginBottom: 20,
//   },
//   paper2: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'blue',
//     position: 'relative',
//     top: -50,
//   },
// }));


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
  const classes = useStyles();


  const [congressMembers, setCongressMembers] = useState([]);
  const [sortedMembers, setSortedMembers] = useState(congressMembers);
  const [state, setState] = React.useState('All');
  const [role, setRole] = React.useState('All');
  const [party, setParty] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Name');


  let filteredMembers = sortedMembers.filter((member) => {
    console.log("member role", member.position, role)
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
    console.log("in the handleSort", sortBy)

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

  console.log("congress members", congressMembers)
  console.log("sorted members", sortedMembers)
  console.log("filtered members", filteredMembers)

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
    // setSortedMembers(congressMembers)
  }, []);



  return (
    <div className = {classes.root}>
        <Typography variant='h2'> View Congressmembers </Typography>
        <Paper >
      <FormControl className={classes.formControl}>
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

      <FormControl className={classes.formControl}>
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

      <FormControl className={classes.formControl}>
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
      <div className={classes.buttons}>
      <Button variant="contained" color="primary" onClick={sortByName}>Show by name</Button>
      <Button variant="contained" color="secondary" onClick={sortByState}>Show by state/territory</Button>
      </div>
      </Paper>
      <Paper className={classes.paper2}>
      <CardGrid data={filteredMembers} />
      </Paper>

</div>
)
}

export default FourSelectOptions