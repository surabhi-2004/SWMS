import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import LoginForm from "../components/auth/LoginForm";
import bgImage from "../assets/images/water-bg.jpg";


const Login = () => {
  return (
    <Box
      sx={{
        height: "91.25vh",
        backgroundImage: `linear-gradient(
          rgba(147, 162, 182, 0.55),
          rgba(3, 15, 31, 0.55)
        ), url(${bgImage})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",   
      }}
    >

      <Grid container height="100%">
        {/* Left */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            px: 8,
          }}

        >
          <Typography
            variant="h4"
            className="animate__animated animate__zoomIn"
            sx={{
              fontFamily: "Rubik, sans-serif",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#ffffff",
            }}
          >
            Smart Water Monitoring System
          </Typography>




          <Typography
            variant="body1"
            className="animate__animated animate__zoomIn animate__delay-1s"
            sx={{
              fontFamily: "Rubik, sans-serif",
              color: "rgba(255,255,255,0.85)", // soft white
              maxWidth: 420,
            }}
          >
            Monitor water quality, machine health and usage in real time.
          </Typography>


        </Grid>

        {/* Right */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
