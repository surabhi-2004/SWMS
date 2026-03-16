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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  //Grid
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";

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
];

/* ================= COMPONENT ================= */

const Companies = () => {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [openDetails, setOpenDetails] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleViewDetails = (customer) => {

    const dummyDetails = {
      name: customer.name,
      address: "MG Road",
      city: "Mumbai",
      district: "Mumbai City",
      state: "Maharashtra",
      pin: "400001",
      landmark: "Near Metro Station",
      contact: "9876543210",
      alternate: "9123456780",
      email: "bank@example.com",
    };

    setSelectedCustomer(dummyDetails);
    setOpenDetails(true);
  };

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
      
      <Sidebar />

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
                              <TableCell><b>Details</b></TableCell>
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

                                <TableCell>

                                  <Button
                                    variant="outlined"
                                    size="small"
                                    startIcon={<VisibilityIcon />}
                                    onClick={() => handleViewDetails(cust)}
                                  >
                                    View
                                  </Button>

                                </TableCell>

                              </TableRow>

                            ))}

                          </TableBody>

                        </Table>

                      </AccordionDetails>

                    </Accordion>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      </Box>

      {/* DETAILS POPUP */}

    <Dialog
      open={openDetails}
      onClose={() => setOpenDetails(false)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3 }
      }}
    >

    {selectedCustomer && (

    <>
    <DialogTitle sx={{ fontWeight: 700 }}>
    Customer Details
    </DialogTitle>

    <DialogContent>

    <Stack spacing={2}>

    <Stack direction="row" spacing={1} alignItems="center">
    <HomeIcon color="primary" fontSize="small"/>
    <Typography><b>Address:</b> {selectedCustomer.address}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <LocationOnIcon color="primary" fontSize="small"/>
    <Typography><b>City:</b> {selectedCustomer.city}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <LocationOnIcon color="primary" fontSize="small"/>
    <Typography><b>District:</b> {selectedCustomer.district}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <LocationOnIcon color="primary" fontSize="small"/>
    <Typography><b>State:</b> {selectedCustomer.state}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <LocationOnIcon color="primary" fontSize="small"/>
    <Typography><b>Pin Code:</b> {selectedCustomer.pin}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <LocationOnIcon color="primary" fontSize="small"/>
    <Typography><b>Landmark:</b> {selectedCustomer.landmark}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <PhoneIcon color="primary" fontSize="small"/>
    <Typography><b>Contact:</b> {selectedCustomer.contact}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <PhoneIcon color="primary" fontSize="small"/>
    <Typography><b>Alternate:</b> {selectedCustomer.alternate}</Typography>
    </Stack>

    <Stack direction="row" spacing={1} alignItems="center">
    <EmailIcon color="primary" fontSize="small"/>
    <Typography><b>Email:</b> {selectedCustomer.email}</Typography>
    </Stack>

    </Stack>

    </DialogContent>

    <DialogActions>

    <Button
    variant="contained"
    onClick={() => setOpenDetails(false)}
    >
    Close
    </Button>

    </DialogActions>
    </>
    )}

    </Dialog>

    </Box>
  );
};

export default Companies;