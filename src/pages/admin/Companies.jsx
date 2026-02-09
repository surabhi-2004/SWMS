import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  TextField,
  Select,
  MenuItem,
  Button,
  InputAdornment,
  Avatar,
  Stack,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import Sidebar from "../../components/sidebar/Sidebar";

/* ================= HELPER FUNCTIONS ================= */

const getInitials = (name) => {
  const words = name.split(" ");
  return words.length >= 2
    ? words[0][0] + words[1][0]
    : words[0][0];
};

const getAvatarColor = (name) => {
  const colors = ["#2563eb", "#16a34a", "#ea580c", "#9333ea", "#0891b2"];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

/* ================= DUMMY DATA ================= */

const companiesData = [
  {
    name: "XYZ India Pvt. Ltd.",
    profile: "FinTech Solutions",
    status: "Active",
    customers: [
      { name: "ICICI Bank", machines: 120, balance: "₹4,50,000" },
      { name: "HDFC Bank", machines: 95, balance: "₹3,20,000" },
      { name: "UCO Bank", machines: 60, balance: "₹1,80,000" },
    ],
  },
  {
    name: "Infosys Engineering",
    profile: "IT Services",
    status: "Active",
    customers: [
      { name: "State Bank of India", machines: 200, balance: "₹6,00,000" },
      { name: "Canara Bank", machines: 140, balance: "₹4,10,000" },
    ],
  },
  {
    name: "Tesla Automobiles",
    profile: "Automobile Manufacturing",
    status: "Inactive",
    customers: [
      { name: "Bank of Maharashtra", machines: 80, balance: "₹2,30,000" },
    ],
  },
  {
    name: "Wincare Softwares",
    profile: "Enterprise Software",
    status: "Active",
    customers: [
      { name: "ICICI Bank", machines: 70, balance: "₹2,10,000" },
      { name: "HDFC Bank", machines: 50, balance: "₹1,60,000" },
    ],
  },
  {
    name: "Bharti Airtel Limited",
    profile: "Telecommunications",
    status: "Active",
    customers: [
      { name: "State Bank of India", machines: 180, balance: "₹5,40,000" },
      { name: "Canara Bank", machines: 110, balance: "₹3,90,000" },
    ],
  },
];

/* ================= COMPONENT ================= */

const Companies = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || company.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>
        {/* HEADER */}
        <Typography variant="h5" fontWeight={700} mb={3}>
          Companies
        </Typography>

        {/* ACTION BAR */}
        <Paper
          sx={{
            p: 2,
            mb: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              size="small"
              placeholder="Search company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Select
              size="small"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="All">All Status</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </Box>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ textTransform: "none" }}
          >
            Add Company
          </Button>
        </Paper>

        {/* TABLE */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#f8fafc" }}>
              <TableRow>
                <TableCell><b>Company Name</b></TableCell>
                <TableCell><b>Work Profile</b></TableCell>
                <TableCell><b>Status</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredCompanies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={3} sx={{ p: 0 }}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Box
                          sx={{
                            display: "grid",
                            gridTemplateColumns: "2fr 2fr 1fr",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          {/* COMPANY NAME + AVATAR */}
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar
                              sx={{
                                bgcolor: getAvatarColor(company.name),
                                width: 40,
                                height: 40,
                                fontWeight: 700,
                              }}
                            >
                              {getInitials(company.name)}
                            </Avatar>
                            <Typography fontWeight={600}>
                              {company.name}
                            </Typography>
                          </Stack>

                          <Typography color="text.secondary">
                            {company.profile}
                          </Typography>

                          <Chip
                            label={company.status}
                            color={
                              company.status === "Active"
                                ? "success"
                                : "warning"
                            }
                            size="small"
                          />
                        </Box>
                      </AccordionSummary>

                      {/* CUSTOMER TABLE */}
                      <AccordionDetails>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell><b>Customer</b></TableCell>
                              <TableCell><b>No. of Machines</b></TableCell>
                              <TableCell><b>Balance</b></TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {company.customers.map((cust, idx) => (
                              <TableRow key={idx}>
                                <TableCell>
                                  <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                  >
                                    <Avatar
                                      sx={{
                                        bgcolor: getAvatarColor(cust.name),
                                        width: 32,
                                        height: 32,
                                        fontSize: 14,
                                        fontWeight: 700,
                                      }}
                                    >
                                      {getInitials(cust.name)}
                                    </Avatar>
                                    <Typography>{cust.name}</Typography>
                                  </Stack>
                                </TableCell>

                                <TableCell>{cust.machines}</TableCell>
                                <TableCell>{cust.balance}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              ))}

              {filteredCompanies.length === 0 && (
                <TableRow>
                  <TableCell colSpan={3} align="center" sx={{ py: 4 }}>
                    No companies found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Companies;
