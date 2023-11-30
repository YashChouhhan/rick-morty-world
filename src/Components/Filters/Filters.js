import { Box, Typography, Select, MenuItem, IconButton } from "@mui/material";
import React from "react";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useContextProvider } from "../../Context/ContextProvider";

const Filters = () => {

  const { setPagination, statusFilter, setStatusFilter, genderFilter, setGenderFilter, speciesFilter, setSpeciesFilter } = useContextProvider();

  const statusOptions = ["Alive", "Dead", "Unknown"];
  const genderOptions = ["Male", "Female", "Genderless", "Unknown"];
  const speciesOptions = ["Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];

  const handleChange = (event, flag) => {
    if (flag === "Status") {
      setStatusFilter(event.target.value);
    } else if (flag === "Gender") {
      setGenderFilter(event.target.value);
    } else {
      setSpeciesFilter(event.target.value);
    }
  };
  const handleReset = () => {
    setStatusFilter('');
    setGenderFilter('');
    setSpeciesFilter('');
    setPagination(1);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0px 0px 20px 0px'
        }}
      >
        <Typography variant='h6'>Filter Options</Typography>
        <Box>
          {/* Reset Icon */}
          {(statusFilter || genderFilter || speciesFilter) && (
            <IconButton
              onClick={handleReset}>
              <RestartAltIcon />
            </IconButton>
          )}
        </Box>
      </Box>

      {/* Filter By Status */}
      <Box>
        <Select
          value={statusFilter}
          onChange={(value) => handleChange(value, "Status")}
          displayEmpty
          sx={{ width: '100%', marginBottom: '10px' }}
        >
          <MenuItem value="" disabled>
            <span className="text-color">Select Status</span>
          </MenuItem>
          {statusOptions.map((elem, index) => (
            <MenuItem key={index} value={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Filter By Gender */}
      <Box>
        <Select
          value={genderFilter}
          onChange={(value) => handleChange(value, "Gender")}
          displayEmpty
          sx={{ width: '100%', marginBottom: '10px' }}
        >
          <MenuItem value="" disabled>
            <span className="text-color">Select Gender</span>
          </MenuItem>
          {genderOptions.map((elem, index) => (
            <MenuItem key={index} value={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Filter By Species*/}
      <Box>
        <Select
          value={speciesFilter}
          onChange={(value) => handleChange(value, "Species")}
          displayEmpty
          sx={{ width: '100%' }}
        >
          <MenuItem value="" disabled>
            <span className="text-color">Select Species</span>
          </MenuItem>
          {speciesOptions.map((elem, index) => (
            <MenuItem value={elem} key={index}>{elem}</MenuItem>
          ))}
        </Select>
      </Box>
    </Box>
  );
}

export default Filters;