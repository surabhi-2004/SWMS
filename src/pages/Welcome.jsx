import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { name = "User", role } = location.state || {};

  const handleContinue = () => {
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
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #e6f4f9 0%, #dbeafe 50%, #eef6ff 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 🔵 HUGE BACKGROUND BUBBLE */}
      {/* 🔵 HUGE BACKGROUND BUBBLE */}
<Box
  sx={{
    position: "absolute",
    width: 600,          // ⬅ smaller
    height: 600,
    borderRadius: "50%",
    right: "-180px",     // ⬅ adjusted
    top: "50%",
    transform: "translateY(-50%)",
    background: `
      radial-gradient(circle at 25% 25%,
      rgba(255,255,255,0.9) 0%,
      rgba(147,197,253,0.7) 35%,
      rgba(56,189,248,0.6) 65%,
      rgba(14,165,233,0.55) 100%)
    `,
    boxShadow: `
      inset -20px -25px 50px rgba(0,0,0,0.15),
      0 30px 70px rgba(56,189,248,0.35)
    `,
    zIndex: 0,
  }}
/>

      {/* 🟦 Glass Card */}
      <Box
        sx={{
          width: 760,
          padding: "100px 110px",
          borderRadius: "40px",
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(30px)",
          boxShadow: "0 35px 100px rgba(0,0,0,0.12)",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#0f172a",
            mb: 2,
            letterSpacing: "0.5px",
          }}
        >
          Welcome {name}
        </Typography>

        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 600,
            color: "#2563eb",
            mb: 2,
          }}
        >
          to DAEWOO
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            color: "#475569",
            mb: 7,
          }}
        >
          Your Partner in Elevating Everyday Living!
        </Typography>

        <Button
          onClick={handleContinue}
          sx={{
            background:
              "linear-gradient(135deg,#60a5fa,#38bdf8)",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "18px",
            padding: "18px 60px",
            borderRadius: "40px",
            boxShadow:
              "0 20px 60px rgba(56,189,248,0.45)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow:
                "0 30px 80px rgba(56,189,248,0.6)",
            },
          }}
        >
          Enter Your Dashboard →
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
