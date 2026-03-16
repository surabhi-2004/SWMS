import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  CircularProgress
} from "@mui/material";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import Sidebar from "../../components/customerSidebar/CustomerSidebar";
import { apiRequest } from "../../services/api"; // ✅ IMPORTANT

/* Dummy Machine ID */

const MACHINE_ID = "WATER_777";

/* Dummy Transactions */

const transactions = [
  { id: 1, time: "13-03-2026 03:00:00", amount: 200, status: "Confirmed" },
  { id: 2, time: "12-03-2026 08:30:00", amount: 500, status: "Pending" },
  { id: 3, time: "11-03-2026 05:10:00", amount: 300, status: "Failed" }
];

const CustomerRecharge = () => {

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const [openRecharge, setOpenRecharge] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  /* Status Chip */

  const getStatusChip = (status) => {
    if (status === "Confirmed") {
      return <Chip label="Confirmed" color="success" size="small" />;
    }
    if (status === "Pending") {
      return <Chip label="Pending" color="warning" size="small" />;
    }
    if (status === "Failed") {
      return <Chip label="Failed" color="error" size="small" />;
    }
    return <Chip label={status} size="small" />;
  };

  /* 🔥 UPDATED SUBMIT */

  const handleSubmit = async () => {

    if (!amount || amount <= 0) {
      setPopupType("error");
      setPopupMessage("Enter valid recharge amount");
      setOpenPopup(true);
      return;
    }

    try {

      setLoading(true);

      const response = await apiRequest("/recharge", {
        method: "POST",
        body: JSON.stringify({
          device_id: MACHINE_ID,
          amount: Number(amount)
        })
      });

      setLoading(false);

      // ⚠️ session expire hua → redirect already ho chuka hoga
      if (!response) return;

      if (response.ok) {

        setPopupType("success");

        setPopupMessage(
          `Successful recharge of ₹${amount} on machine ${MACHINE_ID}.`
        );

        setOpenPopup(true);
        setOpenRecharge(false);
        setAmount("");

      } else {

        setPopupType("error");
        setPopupMessage("Recharge failed");
        setOpenPopup(true);
      }

    } catch (error) {

      setLoading(false);

      setPopupType("error");
      setPopupMessage("Server error while processing recharge");
      setOpenPopup(true);
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>

        {/* Header */}

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="h5" fontWeight={700}>
            Recharge Transactions
          </Typography>

          <Button variant="contained" onClick={() => setOpenRecharge(true)}>
            Recharge
          </Button>
        </Box>

        {/* Machine ID */}

        <Typography sx={{ mb: 3, color: "#475569" }}>
          Machine ID: <strong>{MACHINE_ID}</strong>
        </Typography>

        {/* Table */}

        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
          }}
        >
          <Table>

            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>S NO</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Time</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Recharge Amount</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {transactions.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell>₹{row.amount}</TableCell>
                  <TableCell>{getStatusChip(row.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </Paper>

      </Box>

      {/* Recharge Popup */}

      <Dialog open={openRecharge} onClose={() => setOpenRecharge(false)} maxWidth="sm" fullWidth>

        <DialogTitle>Recharge Machine</DialogTitle>

        <DialogContent>
          <Stack spacing={3} mt={1}>
            <TextField
              label="Recharge Amount (₹)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              fullWidth
            />
          </Stack>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenRecharge(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>

      </Dialog>

      {/* Result Popup */}

      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>

        <DialogTitle sx={{ textAlign: "center" }}>
          {popupType === "success"
            ? <CheckCircleIcon sx={{ fontSize: 70, color: "green" }} />
            : <CancelIcon sx={{ fontSize: 70, color: "red" }} />
          }
        </DialogTitle>

        <DialogContent>
          <Typography textAlign="center">
            {popupMessage}
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" onClick={() => setOpenPopup(false)}>
            OK
          </Button>
        </DialogActions>

      </Dialog>

      {/* Loading Overlay */}

      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(6px)",
            backgroundColor: "rgba(255,255,255,0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000
          }}
        >
          <CircularProgress size={70} />
          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            Processing Recharge...
          </Typography>
        </Box>
      )}

    </Box>
  );
};

export default CustomerRecharge;