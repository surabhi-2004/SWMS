import React from "react";
import { Box, Typography } from "@mui/material";

const StatCard = ({ title, value }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        p: 3,
        borderRadius: "14px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#6b7280", mb: 1 }}
      >
        {title}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: "#091e3e" }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default StatCard;
