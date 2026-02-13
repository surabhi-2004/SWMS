import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@mui/material";
import CustomerSidebar from "../../components/customerSidebar/CustomerSidebar";

const MachineDetails = () => {
  const [model, setModel] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [installDate, setInstallDate] = useState("");

  const [machines, setMachines] = useState([]);
  const [selectedMachine, setSelectedMachine] = useState(null);

  const machineModels = [
    "DAEWOO AquaPure X1",
    "DAEWOO AquaPure X2",
    "DAEWOO AquaElite Pro",
    "DAEWOO AquaSmart Max",
  ];

  const handleAddMachine = () => {
    if (!model || !serialNumber || !purchaseDate || !installDate) return;

    const newMachine = {
      id: Date.now(),
      model,
      serialNumber,
      purchaseDate,
      installDate,
    };

    setMachines([...machines, newMachine]);

    // reset fields
    setModel("");
    setSerialNumber("");
    setPurchaseDate("");
    setInstallDate("");
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CustomerSidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>
        <Typography variant="h5" fontWeight={700} mb={4}>
          Machine Details
        </Typography>

        {/* ================= ADD MACHINE FORM ================= */}
        <Paper sx={{ p: 4, borderRadius: 4, mb: 4 }}>
          <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
            <TextField
              select
              label="Model Name"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              sx={{ minWidth: 220 }}
            >
              {machineModels.map((machine, index) => (
                <MenuItem key={index} value={machine}>
                  {machine}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Serial Number"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              sx={{ minWidth: 220 }}
            />

            <TextField
              label="Date of Purchase"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              sx={{ minWidth: 200 }}
            />

            <TextField
              label="Date of Installation"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={installDate}
              onChange={(e) => setInstallDate(e.target.value)}
              sx={{ minWidth: 200 }}
            />

            <Button
              variant="contained"
              onClick={handleAddMachine}
              sx={{
                height: 56,
                backgroundColor: "#2563eb",
              }}
            >
              Add Machine
            </Button>
          </Box>
        </Paper>

        {/* ================= MACHINE TABLE ================= */}
        {machines.length > 0 && (
          <Paper sx={{ borderRadius: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Model</b></TableCell>
                  <TableCell><b>Serial No</b></TableCell>
                  <TableCell><b>Purchase Date</b></TableCell>
                  <TableCell><b>Install Date</b></TableCell>
                  <TableCell><b>Select</b></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {machines.map((machine) => (
                  <TableRow key={machine.id}>
                    <TableCell>{machine.model}</TableCell>
                    <TableCell>{machine.serialNumber}</TableCell>
                    <TableCell>{machine.purchaseDate}</TableCell>
                    <TableCell>{machine.installDate}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        variant={
                          selectedMachine?.id === machine.id
                            ? "contained"
                            : "outlined"
                        }
                        onClick={() => setSelectedMachine(machine)}
                      >
                        {selectedMachine?.id === machine.id
                          ? "Selected"
                          : "Select"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default MachineDetails;
