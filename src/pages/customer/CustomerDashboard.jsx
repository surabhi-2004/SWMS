import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const waterQualityData = [
  { name: "Good", value: 85 },
  { name: "Bad", value: 15 },
];

const COLORS = ["#22c55e", "#ef4444"];

/* ================= COMPACT STAT CARD ================= */
const StatCard = ({ title, value, unit, icon: Icon, color }) => (
  <Paper
    sx={{
      flex: 1,
      height: "130px",             // 🔥 HEIGHT REDUCED
      
      p: 2,
      borderRadius: 2,
      backgroundColor: "#ffffff",
      border: "1px solid #e5e7eb",
      boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Icon sx={{ color }} />
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          textTransform: "uppercase",
          color: "#475569",
        }}
      >
        {title}
      </Typography>
    </Box>

    <Typography
      sx={{
        fontSize: "26px",
        fontWeight: 700,
        color: "#0f172a",
      }}
    >
      {value} {unit}
    </Typography>
  </Paper>
);

const CustomerDashboard = () => {
  const customerName = "Rahul Sharma";

  return (
    <Box sx={{ display: "flex", height: ""}}>
      <CustomerSidebar />

      {/* ================= MAIN CONTENT ================= */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2.5,
          pt: 2,
          backgroundColor: "#f1f5f9",
        }}
      >

        {/* ================= HEADER ================= */}
        <Box mb={3}>
  <Typography
    sx={{
      fontSize: "26px",
      fontWeight: 800,
      letterSpacing: "0.4px",
      color: "#0f172a",
      textShadow: "0 1px 0 rgba(255,255,255,0.6)",
    }}
  >
    Welcome, {customerName}
  </Typography>

  <Typography
    sx={{
      mt: 0.6,
      fontSize: "14.5px",
      fontWeight: 500,
      color: "#475569",
      letterSpacing: "0.25px",
      textShadow: "0 0.5px 0 rgba(255,255,255,0.5)",
    }}
  >
    Welcome to <b>DAEWOO</b> – Your Partner in Elevating Everyday Living!
  </Typography>
</Box>


        {/* ================= STAT CARDS ================= */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
          }}
        >
          <StatCard
            title="Water Consumed"
            value="12,500"
            unit="L"
            icon={WaterDropOutlinedIcon}
            color="#2563eb"
          />

          <StatCard
            title="Balance Water Remaining"
            value="7,500"
            unit="L"
            icon={OpacityOutlinedIcon}
            color="#0ea5e9"
          />

          <StatCard
            title="Balance Amount Remaining"
            value="₹1,250"
            unit=""
            icon={AccountBalanceWalletOutlinedIcon}
            color="#16a34a"
          />
        </Box>

        {/* ================= WATER QUALITY ================= */}
        <Paper
          sx={{
            height: "260px",        // 🔥 FIXED HEIGHT
            maxWidth:"360px",
            p: 2,
            borderRadius: 2,
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 8px 18px rgba(0,0,0,0.12)",
          }}
        >
          <Typography fontWeight={600} mb={1}>
            Water Quality Status
          </Typography>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={waterQualityData}
                dataKey="value"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
              >
                {waterQualityData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default CustomerDashboard;
