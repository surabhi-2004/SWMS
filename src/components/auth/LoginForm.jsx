import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const dummyUsers = {
      "admin@test.com": {
        role: "ADMIN",
        isProfileComplete: false,
      },
      "customer@test.com": {
        role: "CUSTOMER",
        isProfileComplete: false,
      },
      "admin2@test.com": {
        role: "ADMIN",
        isProfileComplete: true,
      },
    };

    const user = dummyUsers[email];

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    if (!user.isProfileComplete) {
      // 🔑 store role temporarily
      localStorage.setItem("role", user.role);
      navigate("/register");
    } else {
      if (user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/customer/dashboard");
      }
    }
  };

  return (
    <Box
      sx={{
        width: 420,
        p: 4,
        borderRadius: "22px",
        backgroundColor: "#ffffff",
        boxShadow: "0 20px 40px rgba(0,0,0,0.40)",
        transform: "translateX(60px)",
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        mb={2}
        sx={{ fontWeight: 700, color: "#091e3e" }}
      >
        Login
      </Typography>

      <TextField
        fullWidth
        label="Email / Username"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        type="password"
        label="Password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Box textAlign="right" mt={1}>
        <Link
          component="button"
          underline="hover"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot password?
        </Link>
      </Box>

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
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
