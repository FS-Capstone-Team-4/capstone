import React from "react";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import RepCard from "./RepCard";
import { createTheme, ThemeProvider } from "@mui/material";

const IntroText = ({ senators, representatives }) => {
  const [isIntroTextVisible, setIsIntroTextVisible] = useState(false);

  useEffect(() => {
    setIsIntroTextVisible(true);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "white",
          position: "relative",
          zIndex: "999",
          padding: 3,

          [theme.breakpoints.up("md")]: {
            position: "absolute",
            height: "500px",
            marginTop: "0px",
            borderRadius: 3,
            boxShadow: 2,
            top: "50%",
            left: "26%",
            width: "450px",
            opacity: isIntroTextVisible ? 1 : 0,
            transition: "opacity 1s ease-in-out",  
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, fontSize: "35px", fontWeight: "bold" }}
        >
          Welcome to polifacts
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "20px",
            textAlign: "left",
          }}
        >
          Polifacts makes information about your congressmembers easy and
          accessible. Once you enter your zipcode, click to the right to view
          details on your local representatives. If you want
          to learn about other states and bills or decided not to share your
          location, navigate our sidebar to the left to learn more about bills
          by keyword or search members by state.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default IntroText;
