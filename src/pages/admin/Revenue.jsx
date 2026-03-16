import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

import Sidebar from "../../components/sidebar/Sidebar";


import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

const Revenue = () => {

  const [openList, setOpenList] = useState(null);

  const handleOpen = (type) => {
    setOpenList(type);
  };

  const handleClose = () => {
    setOpenList(null);
  };

  /* ================= DUMMY DATA ================= */

  const revenueData = {
    totalRevenue: "₹18,50,000",
    availableBalance: "₹3,20,000",

    zeroCompanies: [
      "ICICI Bank",
      "Axis Bank",
      "Punjab National Bank"
    ],

    lowBalanceCompanies: [
      "HDFC Bank",
      "UCO Bank",
      "Bank of Maharashtra"
    ]
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>

        <Typography variant="h5" fontWeight={700} mb={4}>
          Revenue Overview
        </Typography>

        {/* ================= KPI CARDS ================= */}

        <Box sx={{ display: "flex", gap: 3 }}>

          {[
            {
              title: "TOTAL REVENUE",
              icon: <CurrencyRupeeOutlinedIcon fontSize="small" />,
              value: revenueData.totalRevenue
            },

            {
              title: "RECHARGE AMOUNT AVAILABLE",
              icon: <AccountBalanceWalletOutlinedIcon fontSize="small" />,
              value: revenueData.availableBalance
            },

            {
              title: "ZERO BALANCE",
              icon: <ErrorOutlineOutlinedIcon fontSize="small" />,
              value: revenueData.zeroCompanies.length,
              button: {
                label: "View Companies",
                type: "zero"
              }
            },

            {
              title: "ABOUT TO FINISH",
              icon: <WarningAmberOutlinedIcon fontSize="small" />,
              value: revenueData.lowBalanceCompanies.length,
              button: {
                label: "View Companies",
                type: "low"
              }
            }

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
                flexDirection: "column"
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
                  gap: 1
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
                  justifyContent: "space-between"
                }}
              >

                <Typography
                  fontSize="20px"
                  fontWeight={700}
                >
                  {card.value}
                </Typography>

                {card.button && (

                  <Button
                    variant="contained"
                    onClick={() => handleOpen(card.button.type)}
                    sx={{
                      mt: 2,
                      textTransform: "none",
                      fontSize: "12px",
                      backgroundColor: "#2563eb"
                    }}
                  >
                    {card.button.label}
                  </Button>

                )}

              </Box>

            </Paper>

          ))}

        </Box>

        {/* ================= POPUP ================= */}

        <Dialog
          open={Boolean(openList)}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
        >

          <DialogTitle>

            {openList === "zero"
              ? "Companies with Zero Balance"
              : "Companies with Low Balance"}

          </DialogTitle>

          <DialogContent dividers>

            <List>

              {(openList === "zero"
                ? revenueData.zeroCompanies
                : revenueData.lowBalanceCompanies
              ).map((company, index) => (

                <ListItem key={index}>
                  <ListItemText primary={company} />
                </ListItem>

              ))}

            </List>

          </DialogContent>

        </Dialog>

      </Box>

    </Box>
  );
};

export default Revenue;