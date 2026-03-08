import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Autocomplete,
} from "@mui/material";

import Sidebar from "../../components/sidebar/Sidebar";

/* Dummy Device IDs */

const deviceList = [
  "DEV-1001",
  "DEV-1002",
  "DEV-1003",
  "DEV-1004",
  "DEV-1005",
  "DEV-2001",
  "DEV-2002",
];

const Recharge = () => {
  const [amount, setAmount] = useState("");
  const [deviceId, setDeviceId] = useState("");

  /* Amount Validation */

  const handleAmountChange = (e) => {
  const value = e.target.value;

  // allow numbers and decimal only
  if (/^\d*\.?\d*$/.test(value)) {
    setAmount(value);
  }
};

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      alert("Enter valid recharge amount");
      return;
    }

    if (!deviceId) {
      alert("Select Device ID");
      return;
    }

    alert(`Recharge Successful\nDevice: ${deviceId}\nAmount: ₹${amount}`);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Recharge Device
        </Typography>

        <Paper
          sx={{
            p: 4,
            width: 500,
            borderRadius: 2,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
          }}
        >
          <Stack spacing={3}>
            {/* Recharge Amount */}

            <TextField
              label="Recharge Amount (₹)"
              value={amount}
              onChange={handleAmountChange}
              fullWidth
              type="text"
              placeholder="Enter recharge amount"
            />

            {/* Device ID */}

            <Autocomplete
              freeSolo
              options={deviceList}
              value={deviceId}
              onChange={(e, newValue) => setDeviceId(newValue)}
              onInputChange={(e, newInput) => setDeviceId(newInput)}
              renderInput={(params) => (
                <TextField {...params} label="Device ID" />
              )}
            />

            {/* Submit */}

            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{ height: 45 }}
            >
              Submit Recharge
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Recharge;