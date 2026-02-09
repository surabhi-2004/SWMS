import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";

/* ===== DUMMY SESSION DATA ===== */
const sessionData = [
  {
    device_id: "WATER_001",
    session_start_time: "18:40:05",
    session_duration_sec: 92,
    volume_litres: 12.3,
    cost_inr: 24.6,
    balance_after_session: 475.4,
  },
  {
    device_id: "WATER_001",
    session_start_time: "19:15:22",
    session_duration_sec: 110,
    volume_litres: 15.1,
    cost_inr: 30.2,
    balance_after_session: 445.2,
  },
  {
    device_id: "WATER_001",
    session_start_time: "20:05:10",
    session_duration_sec: 75,
    volume_litres: 9.8,
    cost_inr: 19.6,
    balance_after_session: 425.6,
  },
];

const CustomerSessions = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CustomerSidebar />

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          backgroundColor: "#f1f5f9",
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={3}>
          Water Usage Sessions
        </Typography>

        <Paper
          sx={{
            borderRadius: "16px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead sx={{ backgroundColor: "#f8fafc" }}>
                <TableRow>
                  <TableCell><b>Device ID</b></TableCell>
                  <TableCell><b>Start Time</b></TableCell>
                  <TableCell><b>Duration (sec)</b></TableCell>
                  <TableCell><b>Water Used (L)</b></TableCell>
                  <TableCell><b>Cost (₹)</b></TableCell>
                  <TableCell><b>Balance After Session (₹)</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {sessionData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Chip label={row.device_id} color="primary" size="small" />
                    </TableCell>
                    <TableCell>{row.session_start_time}</TableCell>
                    <TableCell>{row.session_duration_sec}</TableCell>
                    <TableCell>{row.volume_litres}</TableCell>
                    <TableCell>₹{row.cost_inr}</TableCell>
                    <TableCell>
                      ₹{row.balance_after_session}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
};

export default CustomerSessions;
