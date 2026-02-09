import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  Button,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import Sidebar from "../../components/sidebar/Sidebar";

/* ================== DUMMY DATA ================== */

const companiesList = [
  "XYZ India Pvt. Ltd.",
  "Infosys Engineering",
  "Tesla Automobiles",
  "Wincare Softwares",
  "Bharti Airtel Limited",
];

const banksByCompany = {
  "XYZ India Pvt. Ltd.": ["ICICI Bank", "HDFC Bank", "UCO Bank"],
  "Infosys Engineering": ["State Bank of India", "Canara Bank"],
  "Tesla Automobiles": ["Bank of Maharashtra"],
  "Wincare Softwares": ["ICICI Bank", "HDFC Bank"],
  "Bharti Airtel Limited": ["State Bank of India", "Canara Bank"],
};

const machineOptions = ["All", "0-50", "50-100", "100+"];

const reportResults = [
  {
    company: "XYZ India Pvt. Ltd.",
    bank: "ICICI Bank",
    machines: 120,
    waterUsed: "45,000 L",
    amount: "₹2,40,000",
    status: "Completed",
  },
];

/* ================== COMPONENT ================== */

const Reports = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [companies, setCompanies] = useState([]);
  const [banks, setBanks] = useState([]);
  const [machines, setMachines] = useState([]);
  const [availableBanks, setAvailableBanks] = useState([]);
  const [showResults, setShowResults] = useState(false);

  /* ===== AUTO DEPENDENT BANKS ===== */
  useEffect(() => {
    const set = new Set();
    companies.forEach((c) => {
      banksByCompany[c]?.forEach((b) => set.add(b));
    });
    setAvailableBanks([...set]);
    setBanks([]);
  }, [companies]);

  /* ===== CLEAR ALL ===== */
  const clearAllFilters = () => {
    setStartDate("");
    setEndDate("");
    setCompanies([]);
    setBanks([]);
    setMachines([]);
    setShowResults(false);
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Reports
        </Typography>

        {/* ================= FILTER CARD ================= */}
        <Paper sx={{ p: 3, borderRadius: 2, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={2}>
              <TextField
                type="date"
                label="Start Date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={2}>
              <TextField
                type="date"
                label="End Date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>

            {/* COMPANY MULTI SELECT */}
            <Grid item xs={12} md={3}>
              <Select
                multiple
                fullWidth
                displayEmpty
                value={companies}
                onChange={(e) => setCompanies(e.target.value)}
                renderValue={(selected) =>
                  selected.length === 0 ? (
                    <Typography color="text.secondary">
                      Company Name
                    </Typography>
                  ) : (
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {selected.map((val) => (
                        <Chip
                          key={val}
                          label={val}
                          onDelete={(e) => {
                            e.stopPropagation();
                            setCompanies((prev) =>
                              prev.filter((c) => c !== val)
                            );
                          }}
                        />
                      ))}
                    </Stack>
                  )
                }
              >
                {companiesList.map((c) => (
                  <MenuItem key={c} value={c}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      {c}
                      {companies.includes(c) && (
                        <CheckIcon color="success" fontSize="small" />
                      )}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* BANK MULTI SELECT */}
            <Grid item xs={12} md={3}>
              <Select
                multiple
                fullWidth
                displayEmpty
                value={banks}
                onChange={(e) => setBanks(e.target.value)}
                renderValue={(selected) =>
                  selected.length === 0 ? (
                    <Typography color="text.secondary">
                      Bank Name
                    </Typography>
                  ) : (
                    <Stack direction="row" spacing={1} flexWrap="wrap">
                      {selected.map((val) => (
                        <Chip
                          key={val}
                          label={val}
                          onDelete={(e) => {
                            e.stopPropagation();
                            setBanks((prev) =>
                              prev.filter((b) => b !== val)
                            );
                          }}
                        />
                      ))}
                    </Stack>
                  )
                }
              >
                {availableBanks.map((b) => (
                  <MenuItem key={b} value={b}>
                    {b}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            {/* MACHINES */}
            <Grid item xs={12} md={2}>
              <Select
                multiple
                fullWidth
                displayEmpty
                value={machines}
                onChange={(e) => setMachines(e.target.value)}
                renderValue={(selected) =>
                  selected.length === 0 ? (
                    <Typography color="text.secondary">Machines</Typography>
                  ) : (
                    <Stack direction="row" spacing={1}>
                      {selected.map((m) => (
                        <Chip
                          key={m}
                          label={m}
                          onDelete={(e) => {
                            e.stopPropagation();
                            setMachines((prev) =>
                              prev.filter((i) => i !== m)
                            );
                          }}
                        />
                      ))}
                    </Stack>
                  )
                }
              >
                {machineOptions.map((m) => (
                  <MenuItem key={m} value={m}>
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          {/* BUTTONS */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3, gap: 2 }}>
            <Button variant="outlined" onClick={clearAllFilters}>
              Clear All
            </Button>
            <Button
              variant="contained"
              onClick={() => setShowResults(true)}
            >
              Generate Report
            </Button>
          </Box>
        </Paper>

        {/* ================= RESULTS TABLE ================= */}
        {showResults && (
          <Paper sx={{ borderRadius: 2 }}>
            <Typography fontWeight={600} p={2}>
              Report Results
            </Typography>

            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#f8fafc" }}>
                  <TableRow>
                    <TableCell><b>Company</b></TableCell>
                    <TableCell><b>Bank</b></TableCell>
                    <TableCell><b>Machines</b></TableCell>
                    <TableCell><b>Water Usage</b></TableCell>
                    <TableCell><b>Amount</b></TableCell>
                    <TableCell><b>Status</b></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {reportResults.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.company}</TableCell>
                      <TableCell>{row.bank}</TableCell>
                      <TableCell>{row.machines}</TableCell>
                      <TableCell>{row.waterUsed}</TableCell>
                      <TableCell>{row.amount}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color="success"
                          size="small"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default Reports;
