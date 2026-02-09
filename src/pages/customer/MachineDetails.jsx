import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";

const MachineDetails = () => {
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
        {/* ===== HEADER ===== */}
        <Typography variant="h5" fontWeight={700} mb={3}>
          Machine Details
        </Typography>

        {/* ===== CARD ===== */}
        <Paper
          sx={{
            maxWidth: 700,
            p: 4,
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",
          }}
        >
          <Grid container spacing={3}>
            {/* MODEL NAME */}
            <Grid item xs={12}>
              <TextField
                select
                fullWidth
                label="Model Name"
                value="DAEWOO AquaPure X1"
                disabled
              >
                <MenuItem value="DAEWOO AquaPure X1">
                  DAEWOO AquaPure X1
                </MenuItem>
                <MenuItem value="DAEWOO AquaPure Pro">
                  DAEWOO AquaPure Pro
                </MenuItem>
              </TextField>
            </Grid>

            {/* SERIAL NUMBER */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Serial Number"
                value="DWQX1-IND-983421"
                disabled
              />
            </Grid>

            {/* DATE OF MANUFACTURE */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Manufacture"
                type="date"
                InputLabelProps={{ shrink: true }}
                value="2023-08-15"
                disabled
              />
            </Grid>

            {/* DATE OF INSTALLATION */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Date of Installation"
                type="date"
                InputLabelProps={{ shrink: true }}
                value="2023-09-05"
                disabled
              />
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
};

export default MachineDetails;
