import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

// Icons
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

const Sidebar = () => {
  const location = useLocation();

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
      label: "Revenue",
      path: "/admin/revenue",
      icon: <CurrencyRupeeOutlinedIcon />
    },
    {
      label: "Recharge",
      path: "/admin/recharge",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      label: "Settings",
      path: "/admin/settings",
      icon: <SettingsOutlinedIcon />,
    }
  ];

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
    </Box>
  );
};

export default Sidebar;