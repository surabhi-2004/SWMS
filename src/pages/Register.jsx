import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";

const Register = () => {
  const navigate = useNavigate();

  // 🔑 role set from Login page (dummy / backend later)
  const role = localStorage.getItem("role"); // ADMIN / CUSTOMER

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // 🔴 TEMP: backend call later
    console.log("Profile completed:", {
      ...form,
      role,
    });

    // clear temp role
    localStorage.removeItem("role");

    // role-based redirect
    if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/customer/dashboard");
    }
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
          width: 460,
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
          {role === "ADMIN"
            ? "Complete Admin Profile"
            : "Complete Your Profile"}
        </Typography>

        <TextField
          fullWidth
          label="Full Name"
          name="name"
          margin="normal"
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          margin="normal"
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          margin="normal"
          value={form.phone}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="password"
          label="New Password"
          name="password"
          margin="normal"
          value={form.password}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          margin="normal"
          value={form.confirmPassword}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.2,
            borderRadius: "10px",
            backgroundColor: "#0b5ed7",
            fontWeight: 600,
            textTransform: "none",
          }}
          onClick={handleSubmit}
        >
          Save & Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
