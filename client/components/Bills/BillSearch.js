import React from "react";
import { useState } from "react";
import axios from "axios";
import { Paper, InputBase } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MenuList from "./BillsMap";
import SearchIcon from '@mui/icons-material/Search';
import {Box} from "@mui/material";

//WORK ON THIS PAGE

const BillSearch = () => {
  const [value, setValue] = useState(""); // Here we'll store the value of the search bar's text input
  const onChange = (ev) => {
    setValue(ev.target.value);
  };

  const search = (ev) => {
    ev.preventDefault();
    fetchBills(value);
    console.log("searched", value);
  };

  const filterBills = (ev) => {
    fetchBills(ev);
  };

  const token = "Zy3zqkzTIeeWT37pkeA06VRZNZhFAoYAm530xYl6";
  const config = {
    headers: {
      "X-API-Key": token,
    },
  };

  //bills by query
  const [bills, setBills] = useState([]);

  const fetchBills = async (query) => {
    const response = await axios.get(
      `https://api.propublica.org/congress/v1/bills/search.json?query=${query}`,
      config
    );
    setBills(response.data.results[0].bills);
  };

  const [showMore, setShowMore] = useState(Array(bills.length).fill(false));



  return (
    <Box>
      <Box sx={{
         padding: "2px 4px",
         display: "flex",
         alignItems: "center",
         flexDirection:'column',
         width: 400,
         margin: "auto",
      }}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          paddingTop="10px"
          paddingBottom="10px"
        >
          Look up a bill
        </Typography>
        <Paper component="form" sx={{
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          margin: "auto",
        }}>
          <InputBase
            placeholder="Search for something"
            inputProps={{ "aria-label": "search for something" }}
          value={value}
          onChange={onChange}
          sx= {{
            marginLeft: '8px',
            flex: 1
          }}
          />
          <IconButton
            type="submit"
            aria-label="search"
            onClick = {search}
            sx={{
              // padding: 10,
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Typography variant="subtitle1" align="center" color="textSecondary" >
        Or select from popular bill topics
      </Typography>
    
      <Select variant="outlined" defaultValue="" onChange={(e) => filterBills(e.target.value)}>
        <MenuItem value="">-- Select a Bill Topic --</MenuItem>
        <MenuItem value="healthcare">Healthcare</MenuItem>
        <MenuItem value="education">Education</MenuItem>
        <MenuItem value="environment">Environment</MenuItem>
        <MenuItem value="taxes">Taxes</MenuItem>
        <MenuItem value="technology">Technology</MenuItem>
        <MenuItem value="civil rights">Civil Rights</MenuItem>

      </Select>
      </Box>

      <Box 
      sx= {{
           padding: "10px 20px",
           display: "flex",
           alignItems: "center",
           width: 400,
           margin: "auto",
           textAlign: "center",
           align: "center"
      }}
      >
      
    

    </Box>

      {bills? bills.map((bill, index) => (
      <MenuList bill = {bill}/>
      )): ""}
    </Box>
    
  );
};

export default BillSearch;
