import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";

import OpacityIcon from "@mui/icons-material/Opacity";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import WavesIcon from "@mui/icons-material/Waves";

const CustomerDashboard = () => {
  const filterStatus = "GOOD";

  const getStatusColor = () => {
    switch (filterStatus) {
      case "GOOD":
        return "#22c55e";
      case "CRITICAL":
        return "#facc15";
      case "BAD":
        return "#ef4444";
      default:
        return "#22c55e";
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      {/* 🔵 SIDEBAR FIXED & WIDER */}
      <Box
        sx={{
          width: 280,     // 🔥 was 260 → now 280
          flexShrink: 0,
        }}
      >
        <CustomerSidebar />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          flexGrow: 1,
          px: 5,
          py: 4,
          backgroundColor: "#f1f5f9",
        }}
      >

        {/* ===== CARDS ROW ===== */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >

          {/* REUSABLE CARDS */}
          {[
            {
              title: "Water Consumed",
              value: "12,500 L",
              icon: <WaterDropIcon sx={{ color: "#2563eb" }} />,
            },
            {
              title: "Balance Water Remaining",
              value: "7,500 L",
              icon: <OpacityIcon sx={{ color: "#0ea5e9" }} />,
            },
            {
              title: "Balance Amount Remaining",
              value: "₹1,250",
              icon: (
                <AccountBalanceWalletOutlinedIcon
                  sx={{ color: "#16a34a" }}
                />
              ),
            },
          ].map((card, index) => (
            <Paper
              key={index}
              sx={{
                width: 270,
                height: 190,   // ✅ Increased height
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              }}
            >
              {/* HEADER BLUE PART */}
              <Box
                sx={{
                  backgroundColor: "#cfe8f7",
                  p: 2,
                  borderBottom: "1px solid #d1d5db",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {card.icon}
                <Typography
                  fontWeight={600}
                  fontSize="14px"
                  lineHeight={1.3}
                >
                  {card.title}
                </Typography>
              </Box>

              <Box sx={{ p: 3 }}>
                <Typography fontSize="26px" fontWeight={600}>
                  {card.value}
                </Typography>
              </Box>
            </Paper>
          ))}

          {/* WATER QUALITY CARD */}
          <Paper
            sx={{
              width: 270,
              height: 190,  // ✅ Same height as others
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#cfe8f7",
                p: 2,
                borderBottom: "1px solid #d1d5db",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <WavesIcon sx={{ color: getStatusColor() }} />
              <Typography fontWeight={600} fontSize="14px">
                Water Quality Status
              </Typography>
            </Box>

            <Box
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <WaterDropIcon
                sx={{
                  fontSize: 55,
                  color: getStatusColor(),
                }}
              />

              <Typography
                fontWeight={800}
                sx={{
                  color: getStatusColor(),
                  fontSize: "18px",
                }}
              >
                {filterStatus}
              </Typography>
            </Box>
          </Paper>

        </Box>
      </Box>
    </Box>
  );
};

export default CustomerDashboard;