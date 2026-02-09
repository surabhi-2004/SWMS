import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";


import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const membraneData = [
  { name: "Good", value: 80 },
  { name: "Bad", value: 20 },
];

const filterData = [
  { name: "Good", value: 70 },
  { name: "Bad", value: 30 },
];

const COLORS = ["#22c55e", "#ef4444"];

const healthIconConfig = {
  "Membrane Health": {
    icon: SettingsOutlinedIcon,
    color: "#2563eb",
  },
  "Filter Health": {
    icon: FilterAltOutlinedIcon,
    color: "#16a34a",
  },
};


const HealthCard = ({ title, data }) => {
  const config = healthIconConfig[title];
  const Icon = config?.icon;
  const color = config?.color;

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        boxShadow:
          "0 12px 28px rgba(0,0,0,0.12), 0 40px 80px rgba(15,23,42,0.18)",
        height: "350px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== HEADER (ICON + TITLE) ===== */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.2,
          mb: 2,
        }}
      >
        {Icon && (
          <Box
            sx={{
              color,
              fontSize: 22,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon />
          </Box>
        )}

        <Typography
          sx={{
            fontWeight: 600,
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* ===== CHART ===== */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ResponsiveContainer width={260} height={260}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};



const MachineHealth = () => {
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
        <Typography variant="h5" fontWeight={700} mb={4}>
          Machine Health
        </Typography>

        {/* ===== HEALTH CARDS ===== */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <HealthCard
              title="Membrane Health"
              data={membraneData}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <HealthCard
              title="Filter Health"
              data={filterData}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MachineHealth;
