import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const CustomerSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const topMenu = [
    {
      label: "Dashboard",
      path: "/customer/dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    {
      label: "Machine Details",
      path: "/customer/machine-details",
      icon: <PrecisionManufacturingOutlinedIcon />,
    },
    {
      label: "Machine Health",
      path: "/customer/machine-health",
      icon: <MonitorHeartOutlinedIcon />,
    },
    {
      label: "Sessions",
      path: "/customer/sessions",
      icon: <HistoryOutlinedIcon />,
    },
    {
      label: "Alerts",
      path: "/customer/alerts",
      icon: <NotificationsOutlinedIcon />,
    },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    // later: clear token / session
    navigate("/");
  };

  return (
    <Box
      sx={{
        //position: "fixed",
        top: "64px",
        left: 0,
        width: 240,
        height: "calc(100vh - 10px)",

        backgroundColor: "#006bb7",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {/* 🔹 TOP MENU */}
      <List sx={{ flexGrow: 1 }}>
        {topMenu.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              borderRadius: 1,
              color: "white",
              mb: 0.5,
              backgroundColor: isActive(item.path)
                ? "#132f55"
                : "transparent",
              "&:hover": {
                backgroundColor: "#132f55",
              },
            }}
          >
            <ListItemIcon sx={{ color: "white", minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ backgroundColor: "rgba(255,255,255,0.3)", my: 1 }} />

      {/* 🆘 HELPDESK */}
      <List>
        <ListItem
          component={Link}
          to="/customer/helpdesk"
          sx={{
            borderRadius: 1,
            color: "white",
            mb: 0.5,
            backgroundColor: isActive("/customer/helpdesk")
              ? "#132f55"
              : "transparent",
            "&:hover": {
              backgroundColor: "#132f55",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white", minWidth: 36 }}>
            <SupportAgentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Helpdesk" />
        </ListItem>
      </List>

      {/* 🚪 LOGOUT */}
      <List>
        <ListItem
          onClick={handleLogout}
          sx={{
            borderRadius: 1,
            color: "white",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#b91c1c",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white", minWidth: 36 }}>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};

export default CustomerSidebar;
