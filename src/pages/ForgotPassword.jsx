import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleVerifyUser = () => {
    if (!email) return alert("Enter email or username");
    // 🔴 backend check later
    setStep(2);
  };

  const handleResetPassword = () => {
    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    // 🔴 backend call later
    console.log("Password reset for:", email);

    alert("Password updated successfully");
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
      }}
    >
      <Box
        sx={{
          width: 420,
          p: 4,
          borderRadius: "18px",
          backgroundColor: "#ffffff",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          mb={3}
          sx={{ fontWeight: 700, color: "#091e3e" }}
        >
          Forgot Password
        </Typography>

        {step === 1 && (
          <>
            <TextField
              fullWidth
              label="Email / Username"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleVerifyUser}
            >
              Continue
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <TextField
              fullWidth
              type="password"
              label="New Password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3 }}
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword;
