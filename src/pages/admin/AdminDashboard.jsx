import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";

import Sidebar from "../../components/sidebar/Sidebar";
import UsageBarChart from "../../components/adminDashboard/charts/UsageBarChart";

// Icons
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";

const AdminDashboard = () => {
  const [openList, setOpenList] = useState(null);

  // ================= MACHINE DATA =================
  const machineData = {
    active: ["WM-1001", "WM-1002", "WM-1003"],
    offline: ["WM-2001", "WM-2002"],
    warning: ["Machine A1", "Machine B2"],
    critical: ["Machine X1"],
    prepaid: ["Machine P1", "Machine P2"],
    postpaid: ["Machine PP1"],
    membrane: ["WM-3001", "WM-3005"],
    carbon: ["WM-4010"],
    sediment: ["WM-2201", "WM-2203"],
    spun: ["WM-5100"],
    alkaline: ["WM-6100", "WM-6110"],
  };

  const handleOpen = (type) => {
    setOpenList(type);
  };

  const handleClose = () => {
    setOpenList(null);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>
        {/* <Typography variant="h5" fontWeight={700} mb={4}>
          Admin Dashboard
        </Typography> */}

        {/* ================= KPI CARDS ================= */}
        <Box sx={{ display: "flex", gap: 3, flexWrap: "nowrap" }}>
          {[
            {
              title: "TOTAL MACHINES",
              icon: <PrecisionManufacturingOutlinedIcon fontSize="small" />,
              value: "2,000",
              buttons: [
                { label: "Active: 1800", color: "#16a34a", type: "active" },
                { label: "Offline: 100", color: "#dc2626", type: "offline" },
              ],
            },
            {
              title: "SYSTEM HEALTH",
              icon: <MonitorHeartOutlinedIcon fontSize="small" />,
              value: "1,450",
              buttons: [
                {
                  label: "Warning: 430",
                  color: "#facc15",
                  textColor: "#000",
                  type: "warning",
                },
                {
                  label: "Critical: 120",
                  color: "#ef4444",
                  type: "critical",
                },
              ],
            },
            {
              title: "WATER USAGE (TODAY)",
              icon: <WaterDropOutlinedIcon fontSize="small" />,
              value: "12,500 L",
              subtitle: "Avg/Machine: 6.2 L",
            },
            {
              title: "REVENUE",
              icon: <CurrencyRupeeOutlinedIcon fontSize="small" />,
              value: "₹15L",
              buttons: [
                { label: "Prepaid: 1350", color: "#2563eb", type: "prepaid" },
                { label: "Postpaid: 650", color: "#0ea5e9", type: "postpaid" },
              ],
            },
          ].map((card, index) => (
            <Paper
              key={index}
              sx={{
                flex: 1,
                height: 200,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  backgroundColor: "#b8cfdd",
                  px: 2,
                  py: 1.2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {card.icon}
                <Typography fontSize="13px" fontWeight={600}>
                  {card.title}
                </Typography>
              </Box>

              {/* Body */}
              
              <Box
                sx={{
                  p: 2.5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontSize="22px" fontWeight={700} mb={2}>
                  {card.value}
                </Typography>

                {card.subtitle && (
                  <Typography fontSize="13px">
                    {card.subtitle}
                  </Typography>
                )}

                {card.buttons && (
                  <Box display="flex" gap={1.5} mt={1}>
                    {card.buttons.map((btn, i) => (
                      <Button
                        key={i}
                        fullWidth
                        variant="contained"
                        onClick={() => handleOpen(btn.type)}
                        sx={{
                          fontSize: "12px",
                          textTransform: "none",
                          fontWeight: 600,
                          bgcolor: btn.color,
                          color: btn.textColor || "#fff",
                          "&:hover": { opacity: 0.9 },
                        }}
                      >
                        {btn.label}
                      </Button>
                    ))}
                  </Box>
                )}
              </Box>
            </Paper>
          ))}
        </Box>

        {/* ================= CHART + FILTER CARD ================= */}
        <Box sx={{ display: "flex", gap: 3, mt: 5 }}>
          {/* Chart */}
          <Box
            sx={{
              flex: 2,
              background: "#fff",
              p: 3,
              borderRadius: 4,
              boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
            }}
          >
            <Typography fontWeight={600} mb={2}>
              Water Usage Trend (Weekly)
            </Typography>
            <UsageBarChart />
          </Box>

          {/* FILTER CARD */}
          <Box
            sx={{
              flex: 1,
              background: "#fff",
              p: 3,
              borderRadius: 4,
              boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
            }}
          >
            <Typography fontWeight={600} mb={3}>
              System Health Distribution
            </Typography>

            {[
              { name: "Membrane", icon: <FilterAltOutlinedIcon />, type: "membrane" },
              { name: "Carbon", icon: <OpacityOutlinedIcon />, type: "carbon" },
              { name: "Sediment", icon: <BlurCircularOutlinedIcon />, type: "sediment" },
              { name: "Spun (Pre-Filter)", icon: <WaterDropOutlinedIcon />, type: "spun" },
              { name: "Alkaline", icon: <ScienceOutlinedIcon />, type: "alkaline" },
            ].map((filter, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                  p: 1.5,
                  backgroundColor: "#f1f5f9",
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {filter.icon}
                  <Typography fontSize="14px">
                    {filter.name}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  size="small"
                  onClick={() => handleOpen(filter.type)}
                  sx={{
                    textTransform: "none",
                    fontSize: "12px",
                    backgroundColor: "#2563eb",
                  }}
                >
                  View
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= DIALOG ================= */}
        <Dialog
          open={Boolean(openList)}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {openList?.toUpperCase()} MACHINES LIST
          </DialogTitle>

          <DialogContent dividers>
            <List>
              {(machineData[openList] || []).map((machine, index) => (
                <ListItem key={index}>
                  <ListItemText primary={machine} />
                </ListItem>
              ))}
            </List>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};

export default AdminDashboard;


