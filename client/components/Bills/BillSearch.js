import React from "react";
import { useState } from "react";
import axios from "axios";
import { Paper, InputBase } from "@mui/material";
import { IconButton, Typography } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "./BillsMap";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Link } from "react-router-dom"
import { Box } from "@mui/material";

const BillSearch = () => {
  const [value, setValue] = useState(""); 
  const [loadingBills, setLoadingBills] = useState(false); 

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
    try{ setLoadingBills(true);
    const response = await axios.get(
      `https://api.propublica.org/congress/v1/bills/search.json?query=${query}&offset=20&fields=name`,
      config
    );
    console.log(response)
    setBills(response.data.results[0].bills);
    } catch(error) {
      console.log(error)
    } finally {
      setLoadingBills(false);
    }
  };

  const [showMore, setShowMore] = useState(Array(bills.length).fill(false));

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "50px",
    }}
  >
    <AccountBalanceIcon sx={
      {
        height: "100px",
        width: "auto",
        margin: "50px"
      }
    } />
      <Typography
        align="center"
        variant="h5"
      >
        This page is under maintenance. <Link to="/"> Navigate back home! </Link>
      </Typography>
    </Box>
    // <Box
    //   sx={{
    //     margin: "50px",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       padding: "2px 4px",
    //       display: "flex",
    //       alignItems: "center",
    //       flexDirection: "column",
    //       width: 400,
    //       margin: "auto",
    //     }}
    //   >
    //     <Typography
    //       variant="h4"
    //       align="center"
    //       color="textPrimary"
    //       paddingTop="10px"
    //       paddingBottom="10px"
    //     >
    //       Look up a bill
    //     </Typography>
    //     <Paper
    //       component="form"
    //       sx={{
    //         padding: "2px 4px",
    //         display: "flex",
    //         alignItems: "center",
    //         width: 400,
    //         margin: "auto",
    //       }}
    //     >
    //       <InputBase
    //         placeholder="Search for something"
    //         inputProps={{ "aria-label": "search for something" }}
    //         value={value}
    //         onChange={onChange}
    //         sx={{
    //           marginLeft: "8px",
    //           flex: 1,
    //         }}
    //       />
    //       <IconButton
    //         type="submit"
    //         aria-label="search"
    //         onClick={search}
    //       >
    //         <SearchIcon />
    //       </IconButton>
    //     </Paper>
    //     <Typography variant="subtitle1" align="center" color="textSecondary">
    //       Or select from popular bill topics
    //     </Typography>

    //     <Select
    //       variant="outlined"
    //       defaultValue=""
    //       onChange={(e) => filterBills(e.target.value)}
    //     >
    //       <MenuItem value="">-- Select a Bill Topic --</MenuItem>
    //       <MenuItem value="healthcare">Healthcare</MenuItem>
    //       <MenuItem value="education">Education</MenuItem>
    //       <MenuItem value="environment">Environment</MenuItem>
    //       <MenuItem value="taxes">Taxes</MenuItem>
    //       <MenuItem value="technology">Technology</MenuItem>
    //       <MenuItem value="civil rights">Civil Rights</MenuItem>
    //     </Select>
    //   </Box>
      
    //   <div>
    //   <Box
    //     sx={{
    //       padding: "10px 20px",
    //       display: "flex",
    //       alignItems: "center",
    //       width: 400,
    //       margin: "auto",
    //       textAlign: "center",
    //       align: "center",
    //     }}
    //   ></Box>
    //   {loadingBills &&     <Box
    //         sx={{
    //           display: "flex",
    //           flexDirection: "column",
    //           alignItems: "center",
    //           justifyContent: "center",
    //           padding: "50px",
    //         }}
    //       >              <Typography
    //       align="center"
    //       variant="h5"
    //     >Loading bills. This may take a minute...</Typography>

    //       </Box> }
    //   {!loadingBills && bills ? (
    //     bills.map((bill, index) => <MenuList bill={bill} />)
    //   ) : null}
    //   </div>
    // </Box>
  );
};

export default BillSearch;
