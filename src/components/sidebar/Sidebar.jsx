import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";


const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
      label: "Overview",
      path: "/admin/dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    {
      label: "Companies",
      path: "/admin/companies",
      icon: <BusinessOutlinedIcon />,
    },
    {
      label: "Reports",
      path: "/admin/reports",
      icon: <AssessmentOutlinedIcon />,
    },
    {
      label: "Settings",
      path: "/admin/settings",
      icon: <SettingsOutlinedIcon />,
    },
  ];

  const handleLogout = () => {
    // future: clear token / session
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 240,
        backgroundColor: "#006bb7",
        color: "#ffffff",
        p: 2,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== TOP MENU ===== */}
      <List>
        {menu.map((item) => {
          const active = location.pathname === item.path;

          return (
            <ListItem
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: 1.5,
                color: "#fff",
                mb: 0.5,
                backgroundColor: active ? "#132f55" : "transparent",
                "&:hover": {
                  backgroundColor: "#132f55",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#fff", minWidth: 36 }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: "14.5px",
                  fontWeight: active ? 600 : 500,
                }}
              />
            </ListItem>
          );
        })}
      </List>

      {/* ===== PUSH LOGOUT TO BOTTOM ===== */}
      
    </Box>
  );
};

export default Sidebar;
