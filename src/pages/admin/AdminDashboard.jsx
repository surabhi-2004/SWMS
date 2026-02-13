import React, { useState } from "react";
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from "@mui/material";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminStatCard from "../../components/adminDashboard/AdminStatCard";
import UsageBarChart from "../../components/adminDashboard/charts/UsageBarChart";
import HealthPieChart from "../../components/adminDashboard/charts/HealthPieChart";

const AdminDashboard = () => {

  // ✅ STATE ABOVE RETURN
  const [openList, setOpenList] = useState(null);

  // ✅ DUMMY DATA
  const activeMachines = [
    "WM-1001",
    "WM-1002",
    "WM-1003",
    "WM-1004",
    "WM-1005",
  ];

  const offlineMachines = [
    "WM-2001",
    "WM-2002",
    "WM-2003",
  ];

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#f1f5f9",
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={4}>
          Admin Dashboard
        </Typography>

        {/* ===== KPI CARDS ===== */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            mb: 5,
          }}
        >
          <AdminStatCard title="TOTAL MACHINES" value="2000">
            <Box
  sx={{
    display: "flex",
    gap: 2,
    mt: 2,
    alignItems: "center",
  }}
>
  <Button
    variant="contained"
    size="small"
    sx={{
      backgroundColor: "#16a34a",
      textTransform: "none",
      fontWeight: 600,
      px: 2,
      "&:hover": { backgroundColor: "#15803d" },
    }}
    onClick={() => setOpenList("active")}
  >
    Active: 1800
  </Button>

  <Button
    variant="contained"
    size="small"
    sx={{
      backgroundColor: "#dc2626",
      textTransform: "none",
      fontWeight: 600,
      px: 2,
      "&:hover": { backgroundColor: "#b91c1c" },
    }}
    onClick={() => setOpenList("offline")}
  >
    Offline: 100
  </Button>
</Box>

          </AdminStatCard>

          <AdminStatCard title="SYSTEM HEALTH" value="1450">
            <Typography>Warning: 430</Typography>
            <Typography>Critical: 120</Typography>
          </AdminStatCard>

          <AdminStatCard title="WATER USAGE (TODAY)" value="12,500 L">
            <Typography>Avg/Machine: 6.2 L</Typography>
          </AdminStatCard>

          <AdminStatCard title="REVENUE" value="₹15L">
            <Typography>Prepaid: 1350</Typography>
            <Typography>Postpaid: 650</Typography>
          </AdminStatCard>
        </Box>

        {/* ===== CHARTS ===== */}
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              flex: "2 1 0%",
              minWidth: "520px",
              background: "#fff",
              border: "1px solid #d1d5db",
              p: 3,
              boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
            }}
          >
            <Typography fontWeight={600} mb={2}>
              Water Usage Trend (Weekly)
            </Typography>
            <UsageBarChart />
          </Box>

          <Box
            sx={{
              flex: "1 1 0%",
              minWidth: "320px",
              background: "#fff",
              border: "1px solid #d1d5db",
              p: 3,
              boxShadow: "0 18px 40px rgba(0,0,0,0.15)",
            }}
          >
            <Typography fontWeight={600} mb={2}>
              System Health Distribution
            </Typography>
            <HealthPieChart />
          </Box>
        </Box>

        {/* ===== MACHINE LIST POPUP ===== */}
        <Dialog
          open={Boolean(openList)}
          onClose={() => setOpenList(null)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {openList === "active"
              ? "Active Machines List"
              : "Offline Machines List"}
          </DialogTitle>

          <DialogContent dividers>
            <List>
              {(openList === "active"
                ? activeMachines
                : offlineMachines
              ).map((machine, index) => (
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
