import React from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";

import Sidebar from "../../components/sidebar/Sidebar";

/* Dummy Tariff Data */

const tariffs = [
  {
    id: 1,
    company: "HDFC Bank",
    price: 2.5
  },
  {
    id: 2,
    company: "SBI Bank",
    price: 3.0
  },
  {
    id: 3,
    company: "ICICI Bank",
    price: 2.75
  }
];

const Settings = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, p: 4, backgroundColor: "#f1f5f9" }}>

        {/* Page Title */}

        <Typography variant="h5" fontWeight={700} mb={3}>
          Tariff Settings
        </Typography>

        {/* Table */}

        <Paper
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)"
          }}
        >

          <Table>

            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>
                  Company Name
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Charge Per Litre (₹)
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Edit
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              {tariffs.map((row) => (

                <TableRow key={row.id}>

                  <TableCell>
                    {row.company}
                  </TableCell>

                  <TableCell>
                    ₹{row.price}
                  </TableCell>

                  <TableCell>

                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>

                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </Paper>

      </Box>
    </Box>
  );
};

export default Settings;