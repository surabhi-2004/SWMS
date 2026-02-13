import React from "react";
import { AppBar, Toolbar, Box, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import daewooLogo from "../assets/images/logo.png";
import vciLogo from "../assets/images/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

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
          px: 6,
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

        {/* RIGHT SECTION */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          {/* VCI LOGO */}
          <img
            src={vciLogo}
            alt="VCI Logo"
            style={{
              height: "100px",
              objectFit: "contain",
            }}
          />

          {/* LOGOUT ICON */}
          <Tooltip title="Logout" arrow>
            <IconButton
              onClick={handleLogout}
              sx={{
                backgroundColor: "#dc2626",
                color: "white",
                width: 38,
                height: 38,
                "&:hover": {
                  backgroundColor: "#b91c1c",
                },
              }}
            >
              <LogoutIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
