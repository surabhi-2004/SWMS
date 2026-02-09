import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Chip,
} from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

const Helpdesk = () => {
  const [complaint, setComplaint] = useState("");

  // 🔴 Dummy warranty status (backend later)
  const warrantyStatus = "IN WARRANTY";

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
          Helpdesk
        </Typography>

        {/* ===== COMPLAINT REGISTER ===== */}
        <Paper
          sx={{
            p: 3,
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",
            maxWidth: 600,
            mb: 4,
          }}
        >
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <ReportProblemOutlinedIcon color="primary" />
            <Typography fontWeight={600}>
              Register a Complaint
            </Typography>
          </Box>

          <TextField
            label="Complaint Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={{ mb: 2 }}
          />

          <TextField
            label="Complaint Details"
            multiline
            rows={4}
            fullWidth
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#091e3e",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Submit Complaint
          </Button>
        </Paper>

        {/* ===== WARRANTY STATUS ===== */}
        <Paper
          sx={{
            p: 3,
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",
            maxWidth: 400,
            mb: 4,
          }}
        >
          <Typography fontWeight={600} mb={1}>
            Warranty Status
          </Typography>

          <Chip
            label={warrantyStatus}
            color={warrantyStatus === "IN WARRANTY" ? "success" : "error"}
          />
        </Paper>

        {/* ===== CUSTOMER CARE ===== */}
        <Paper
          sx={{
            p: 3,
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",
            maxWidth: 400,
          }}
        >
          <Typography fontWeight={600} mb={1}>
            Customer Care
          </Typography>

          <Button
            variant="outlined"
            startIcon={<CallOutlinedIcon />}
            href="tel:09958377788"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            Call 09958377788
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Helpdesk;
