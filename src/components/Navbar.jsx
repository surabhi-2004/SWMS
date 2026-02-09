import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import daewooLogo from "../assets/images/logo.png";
import vciLogo from "../assets/images/logo2.png";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        height: "75px",
        justifyContent: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,          // 👈 left-right spacing increased
          minHeight: "75px !important",
        }}
      >
        {/* LEFT LOGO */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={daewooLogo}
            alt="Daewoo Logo"
            style={{
              height: "40px",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* RIGHT LOGO */}
        <Box sx={{ display: "flex", alignItems: "center"}}>
          <img
            src={vciLogo}
            alt="VCI Logo"
            style={{
              height: "120px",     // ✅ same height as left logo
              //objectFit: "contain",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
