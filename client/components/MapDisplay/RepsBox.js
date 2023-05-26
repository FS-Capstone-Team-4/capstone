import React from "react";
import {Box, Button, ThemeProvider, Typography} from '@mui/material'
import { useState, useEffect } from "react";
import RepCard from "../RepCard";
import { createTheme } from "@mui/material";


const RepsBox = ({ senators, representatives }) => {
    const [showSenators, setShowSenators] = useState(true);
    const [isRepsBoxVisible, setIsRepsBoxVisible] = useState(false);


    const handleToggle = () => {
      setShowSenators(!showSenators);
    };

    useEffect(() => {
        setIsRepsBoxVisible(true);
      }, []); // Run the effect only once on initial render
    

    const theme = createTheme({
        breakpoints: {
          values: {
            md: 1120, // Medium devices (tablets)
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
        height: '70vh',
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
    <Button
      variant={showSenators ? "contained" : "outlined"}
      color="primary"
      sx={{ marginBottom: 2,
       }}
      onClick={handleToggle}
    >
      Senators
    </Button>
    <Button
      variant={!showSenators ? "contained" : "outlined"}
      color="primary"
      sx={{ marginBottom: 2 }}
      onClick={handleToggle}
    >
      Representatives
    </Button>
    {senators ? (
      showSenators ? (
        <Box sx={{
          display: "flex",
          width:'400px',
          height: '50vh',
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
        transform: 'translate(-50%, -50%)',
      },
  }}
  > 
  <Typography
   variant="h4"
   sx={{ fontSize: "20px", fontWeight: "bold" }}
  >
    Loading your congresspeople....
  </Typography>
    
    </Box>}

  </ThemeProvider>
  );
};

export default RepsBox;
