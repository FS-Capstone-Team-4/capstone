import React from "react";
import {Box, Button, ThemeProvider, Typography} from '@mui/material'
import { useState, useEffect } from "react";
import RepCard from "./RepCard";
import { createTheme } from "@mui/material";


const RepsBox = ({ senators, setSenators, representatives }) => {
    const [showSenators, setShowSenators] = useState(true);
    const [isRepsBoxVisible, setIsRepsBoxVisible] = useState(false);


    const handleToggle = () => {
      setShowSenators(!showSenators);
    };

    useEffect(() => {
        setIsRepsBoxVisible(true);
      }, []); 
    

    const theme = createTheme({
        breakpoints: {
          values: {
            md: 1150, 
          },
        },
      });

  return (
    <ThemeProvider theme={theme}>
    {representatives?     
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        bgcolor: "white",
        zIndex: '999',
        height: '600px',
        marginTop: '20px',

        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            marginTop: '0px',
            top: '50%',
            left: '80%',
            borderRadius: 3,
            boxShadow: 6,
            padding: 3,
            opacity: isRepsBoxVisible ? 1 : 0,
            transition: "opacity 1s ease-in-out",  
            transform: 'translate(-50%, -50%)',
          },
      }}
    
  >
    <Box  sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",}}>
    <Button
      variant={showSenators ? "contained" : "outlined"}
      color="primary"
      sx={{ marginBottom: 2,
      padding: "0 10px" }}
      onClick={handleToggle}
    >
      Senators
    </Button>
    <Button
      variant={!showSenators ? "contained" : "outlined"}
      color="primary"
      sx={{ marginBottom: 2,
      padding: "0 10px" }}
      onClick={handleToggle}
    >
      Representatives
    </Button>
    </Box>
    {senators ? (
      showSenators ? (
        <Box sx={{
          display: "flex",
          width:'400px',
          height: '400px',
          gap: 2,
        }}>
        <RepCard member={senators[0]} />
        <RepCard member={senators[1]} />
        </Box>
      ) : (
        <Box sx={{
          height: '50vh',
          display: "flex",
          width:'200px'
        }}>
        <RepCard member={representatives[0]} />
        </Box>

      )
    ) : null}
    <Button sx={{
      padding: '10px',
      marginTop: '10px'
    }}
    onClick={()=>{
      setSenators(null)
    }}
    > Enter a new zip code</Button>
  </Box>
  : 
  <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bgcolor: "white",
    zIndex: '999',
    height: '60px',
    marginTop: '20px',

    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        marginTop: '0px',
        top: '50%',
        left: '80%',
        borderRadius: 3,
        boxShadow: 6,
        padding: 3,
        opacity: isRepsBoxVisible ? 1 : 0,
        transition: "opacity 1s ease-in-out",  
        transform: 'translate(-75%, -50%)',
      },
  }}
  > 
    Something isn't working. Try again.
    </Box>
    }

  </ThemeProvider>
  );
};

export default RepsBox;
