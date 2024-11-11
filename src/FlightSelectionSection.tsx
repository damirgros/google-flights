import React, { useState } from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  FormControl,
  Typography,
  Popover,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

const FlightSelectionSection = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [peopleCount, setPeopleCount] = useState({
    adults: 1,
    children: 0,
    infantsInSeat: 0,
    infantsInLap: 0,
  });

  // Open the popover when the Select component is clicked
  const handlePeopleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleIncrement = (type: keyof typeof peopleCount) => {
    setPeopleCount((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const handleDecrement = (type: keyof typeof peopleCount) => {
    setPeopleCount((prev) => ({
      ...prev,
      // Prevent decrement if adults is 1 or less
      [type]: type === "adults" && prev[type] <= 1 ? 1 : Math.max(0, prev[type] - 1),
    }));
  };

  return (
    <Box
      sx={{
        width: "80%", // Sets the width to 80% of the parent container
        margin: "0 auto", // Centers the box horizontally
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px", // Optional, for rounded corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Shadow with a slight offset downwards
        display: "flex",
        flexDirection: "column", // Stack the top and bottom divs vertically
      }}
    >
      <Container maxWidth="lg">
        {/* Top section containing 3 selection components */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start", // Align to the left
            gap: "16px",
            marginBottom: "20px", // Add some space below the top section
          }}
        >
          {/* Trip Type Selection */}
          <FormControl sx={{ width: "150px", border: "none" }}>
            <Select
              defaultValue="round_trip"
              sx={{
                fontSize: "0.875rem", // Smaller font size
                display: "flex", // Flexbox for better alignment
                alignItems: "center", // Align text and icon vertically
                "& .MuiSelect-icon": {
                  fontSize: "1rem", // Adjust icon size
                  top: "50%", // Center the icon vertically
                  transform: "translateY(-50%)", // Vertically center the icon
                },
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center", // Vertically align text and icon
                },
              }}
            >
              <MenuItem value="round_trip">
                <SyncAltIcon sx={{ marginRight: "8px" }} />
                Round Trip
              </MenuItem>
              <MenuItem value="one_way">
                <ArrowForwardIcon sx={{ marginRight: "8px" }} />
                One Way
              </MenuItem>
              <MenuItem value="multi_city">
                <AirplanemodeActiveIcon sx={{ marginRight: "8px" }} />
                Multi-City
              </MenuItem>
            </Select>
          </FormControl>

          {/* People Selection */}
          <FormControl sx={{ width: "90px", border: "none" }}>
            <Select
              value={peopleCount.adults}
              onOpen={handlePeopleClick} // Trigger popover when dropdown opens
              sx={{
                fontSize: "0.875rem", // Smaller font size
                display: "flex", // Flexbox for better alignment
                alignItems: "center", // Align text and icon vertically
                "& .MuiSelect-icon": {
                  fontSize: "1rem", // Adjust icon size
                  top: "50%", // Center the icon vertically
                  transform: "translateY(-50%)", // Vertically center the icon
                },
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center", // Vertically align text and icon
                },
              }}
            >
              <MenuItem value={peopleCount.adults}>
                <PersonIcon sx={{ marginRight: "8px" }} />
                {peopleCount.adults}
              </MenuItem>
            </Select>
          </FormControl>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          >
            <Box sx={{ padding: "20px", minWidth: "250px" }}>
              {["adults", "children", "infantsInSeat", "infantsInLap"].map((type) => (
                <Box
                  key={type}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <Typography>{type.charAt(0).toUpperCase() + type.slice(1)}</Typography>
                  <Box>
                    <IconButton
                      onClick={() => handleDecrement(type as keyof typeof peopleCount)}
                      size="small"
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" display="inline" sx={{ margin: "0 10px" }}>
                      {peopleCount[type as keyof typeof peopleCount]}
                    </Typography>
                    <IconButton
                      onClick={() => handleIncrement(type as keyof typeof peopleCount)}
                      size="small"
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              ))}
              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary" variant="contained">
                  Done
                </Button>
              </Box>
            </Box>
          </Popover>

          {/* Class Type Selection */}
          <FormControl sx={{ width: "120px", border: "none" }}>
            <Select
              defaultValue="economy"
              sx={{
                border: "none",
                fontSize: "0.875rem", // Smaller font size
                "& .MuiSelect-icon": {
                  fontSize: "1rem", // Adjust icon size
                },
              }}
            >
              <MenuItem value="economy">Economy</MenuItem>
              <MenuItem value="premium_economy">Premium Economy</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="first">First</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Bottom section containing main input fields */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row", // Arrange input fields in a row
            justifyContent: "center", // Align to the center
            gap: "16px", // Add some gap between input fields
          }}
        >
          <TextField
            fullWidth
            placeholder="From"
            variant="outlined"
            InputProps={{
              startAdornment: <CircleOutlinedIcon sx={{ marginRight: "8px" }} />,
            }}
            sx={{ width: "200px" }}
          />
          <TextField
            fullWidth
            placeholder="To"
            variant="outlined"
            InputProps={{
              startAdornment: <LocationOnIcon sx={{ marginRight: "8px" }} />,
            }}
            sx={{ width: "200px" }}
          />
          <TextField
            fullWidth
            placeholder="Departure"
            type="text"
            InputProps={{
              startAdornment: <CalendarMonthIcon sx={{ marginRight: "8px" }} />,
            }}
            sx={{ width: "200px" }}
          />
          <TextField fullWidth placeholder="Return" type="text" sx={{ width: "200px" }} />
        </Box>
      </Container>
    </Box>
  );
};

export default FlightSelectionSection;
