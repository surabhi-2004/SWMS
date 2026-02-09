import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const InfoCard = ({ number, title, description }) => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "#dbeaf7",
        borderRadius: "24px",
        p: 4,
        height: "100%",
        boxShadow: "none",
      }}
    >
      {/* NUMBER BADGE */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#0072bc",
          color: "#fff",
          width: 40,
          height: 40,
          borderTopLeftRadius: "24px",
          borderBottomRightRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
        }}
      >
        {number}
      </Box>

      {/* CONTENT */}
      <Typography
        sx={{
          fontWeight: 700,
          mb: 1,
          mt: 2,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "#1f2937",
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
};

export default InfoCard;
