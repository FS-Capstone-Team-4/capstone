import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const ZipcodeBox = ({ setZipcode, zipcode }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        md: 1120, // Medium devices (tablets)
      },
    },
  });

  const [input, setInput] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted ZIP Code:", event.target.value);
    setZipcode(input);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
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
            transform: "translate(0%, 0%)",

            [theme.breakpoints.up("md")]: {
              position: "absolute",
              height: "auto",
              borderRadius: 3,
              boxShadow: 2,
              top: "50%",
              left: "75%",
              width: "auto",
              transition: "opacity 1s ease-in-out",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            sx={{
              fontSize: "25px",
              textAlign: "center",
              paddingBottom: "10px",
            }}
          >
            Enter your Zip Code
          </Typography>
 
          <TextField
            label="Type here"
            variant="outlined"
            size="small"
            value={input}
            onChange={handleChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ margin: "10px" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default ZipcodeBox;
