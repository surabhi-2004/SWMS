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
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";

/* ===== DUMMY ALERT DATA (API READY) ===== */
const alertData = [
  {
    device_id: "WATER_001",
    timestamp: "2026-01-20 18:47:20",
    type: "LOW_BALANCE",
    message: "Dispense stopped due to insufficient balance",
  },
  {
    device_id: "WATER_001",
    timestamp: "2026-01-21 09:15:10",
    type: "FILTER_WARNING",
    message: "Filter health below recommended level",
  },
  {
    device_id: "WATER_001",
    timestamp: "2026-01-22 14:32:05",
    type: "MEMBRANE_ALERT",
    message: "Membrane efficiency reduced",
  },
];

const getAlertColor = (type) => {
  switch (type) {
    case "LOW_BALANCE":
      return "error";
    case "FILTER_WARNING":
      return "warning";
    default:
      return "info";
  }
};

const CustomerAlerts = () => {
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
        <Typography
          variant="h5"
          fontWeight={700}
          mb={3}
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <WarningAmberOutlinedIcon color="warning" />
          Alerts & Events
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
                  <TableCell><b>Timestamp</b></TableCell>
                  <TableCell><b>Alert Type</b></TableCell>
                  <TableCell><b>Message</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {alertData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Chip label={row.device_id} size="small" />
                    </TableCell>
                    <TableCell>{row.timestamp}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.type}
                        color={getAlertColor(row.type)}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{row.message}</TableCell>
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

export default CustomerAlerts;
