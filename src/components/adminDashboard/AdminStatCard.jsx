import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import CountUp from "react-countup";

// ICONS
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import OpacityOutlinedIcon from "@mui/icons-material/OpacityOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";

/* ================= ICON + COLOR CONFIG ================= */

const cardConfig = {
  "TOTAL MACHINES": {
    icon: SettingsOutlinedIcon,
    color: "#2563eb", // blue
  },
  "SYSTEM HEALTH": {
    icon: FavoriteBorderOutlinedIcon,
    color: "#22c55e", // green
  },
  "WATER USAGE (TODAY)": {
    icon: OpacityOutlinedIcon,
    color: "#eab308", // yellow
  },
  "REVENUE": {
    icon: CurrencyRupeeOutlinedIcon,
    color: "#16a34a", // dark green
    animate: true,
  },
};

const AdminStatCard = ({ title, value, children }) => {
  const config = cardConfig[title] || {};
  const Icon = config.icon;
  const color = config.color || "#334155";

  return (
    <Paper
      sx={{
        flex: "1 1 0%",
        minWidth: "260px",
        maxWidth: "340px",
        height: "260px",
        p: 3,
        borderRadius: 0,
        border: "1px solid #d1d5db",
        backgroundColor: "#ffffff",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        boxShadow:
          "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",

        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            "0 18px 36px rgba(0,0,0,0.18), 0 60px 120px rgba(15,23,42,0.28)",
        },
      }}
    >
      {/* ================= HEADER ================= */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        {Icon && (
          <Box
            sx={{
              color,
              display: "flex",
              alignItems: "center",
              fontSize: 22,

              /* 🔥 REVENUE ICON ANIMATION */
              animation: config.animate
                ? "pulse 1.6s infinite ease-in-out"
                : "none",

              "@keyframes pulse": {
                "0%": { transform: "scale(1)", opacity: 1 },
                "50%": { transform: "scale(1.15)", opacity: 0.85 },
                "100%": { transform: "scale(1)", opacity: 1 },
              },
            }}
          >
            <Icon />
          </Box>
        )}

        <Typography
          sx={{
            fontSize: "12px",
            letterSpacing: "0.08em",
            fontWeight: 600,
            textTransform: "uppercase",
            color: "#475569",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* ================= VALUE (COUNT UP) ================= */}
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 700,
          color: "#0f172a",
        }}
      >
        <CountUp
          end={parseFloat(value.replace(/[^\d.]/g, ""))}
          duration={1.6}
          separator=","
          suffix={value.replace(/[\d.,]/g, "")}
        />
      </Typography>

      {/* ================= FOOTER ================= */}
      <Box sx={{ fontSize: "14px", color: "#334155" }}>
        {children}
      </Box>
    </Paper>
  );
};

export default AdminStatCard;
