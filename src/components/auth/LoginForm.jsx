import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("ADMIN"); // 🔥 default role

  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // 🔴 Dummy logic (backend later)
    navigate("/welcome", {
      state: {
        name: email.split("@")[0], // temporary dummy name
        role: role,
      },
    });

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

      {/* 🔥 ROLE RADIO BUTTONS */}
      <FormControl sx={{ mb: 2 }}>
        <RadioGroup
          row
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <FormControlLabel
            value="ADMIN"
            control={<Radio />}
            label="Admin"
          />
          <FormControlLabel
            value="CUSTOMER"
            control={<Radio />}
            label="Customer"
          />
        </RadioGroup>
      </FormControl>

      <TextField
        fullWidth
        label="Email / Username"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        fullWidth
        type={showPassword ? "text" : "password"}
        label="Password"
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          ),
        }}
      />

      {/* SHOW PASSWORD + FORGOT PASSWORD ROW */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            cursor: "pointer",
            color: "#475569",
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </Typography>

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

      <Box textAlign="center" mt={2}>
      <Typography sx={{ fontSize: "14px", color: "#475569" }}>
        Don't have an account?{" "}
        <Box
          component="span"
          sx={{
            color: "#0b5ed7",
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={() => navigate("/register")}
        >
          Register
        </Box>
      </Typography>
    </Box>

    </Box>
  );
};

export default LoginForm;
