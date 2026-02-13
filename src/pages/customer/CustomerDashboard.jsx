import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";

import OpacityIcon from "@mui/icons-material/Opacity";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const CustomerDashboard = () => {
  const filterStatus = "GOOD"; // GOOD | BAD | CRITICAL

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
      <CustomerSidebar />

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#f1f5f9",
        }}
      >
        {/* ================= STAT CARDS ================= */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexWrap: "wrap",
            mb: 5,
          }}
        >
          {/* Water Consumed */}
          <Paper
            sx={{
              width: 320,
              height: 160,
              p: 3,
              borderRadius: 4,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <WaterDropIcon sx={{ color: "#2563eb" }} />
              <Typography fontWeight={600}>
                Water Consumed
              </Typography>
            </Box>

            <Typography
              fontSize="28px"
              fontWeight={600}
              sx={{ mt: 3 }}
            >
              12,500 L
            </Typography>
          </Paper>

          {/* Balance Water */}
          <Paper
            sx={{
              width: 320,
              height: 160,
              p: 3,
              borderRadius: 4,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <OpacityIcon sx={{ color: "#0ea5e9" }} />
              <Typography fontWeight={600}>
                Balance Water Remaining
              </Typography>
            </Box>

            <Typography
              fontSize="28px"
              fontWeight={600}
              sx={{ mt: 3 }}
            >
              7,500 L
            </Typography>
          </Paper>

          {/* Balance Amount */}
          <Paper
            sx={{
              width: 320,
              height: 160,
              p: 3,
              borderRadius: 4,
              boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" gap={1}>
              <AccountBalanceWalletOutlinedIcon sx={{ color: "#16a34a" }} />
              <Typography fontWeight={600}>
                Balance Amount Remaining
              </Typography>
            </Box>

            <Typography
              fontSize="28px"
              fontWeight={600}
              sx={{ mt: 3 }}
            >
              ₹1,250
            </Typography>
          </Paper>
        </Box>

        {/* ================= WATER QUALITY CARD ================= */}
        <Paper
          sx={{
            width: 300,
            maxHeight: 400,
            p: 5,
            borderRadius: 4,
            textAlign: "center",
            boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
          }}
        >
          <Typography fontWeight={700} mb={4} fontSize="18px">
            Water Quality Status
          </Typography>

          {/* FULL FILLED DROPLET */}
          <WaterDropIcon
            sx={{
              fontSize: 150,
              color: getStatusColor(),
              filter: "drop-shadow(0px 15px 30px rgba(0,0,0,0.25))",
            }}
          />

          <Typography
            mt={3}
            fontWeight={800}
            sx={{
              color: getStatusColor(),
              fontSize: "20px",
              letterSpacing: 1,
            }}
          >
            {filterStatus}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default CustomerDashboard;
