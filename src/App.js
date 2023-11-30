// App.js
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Filters from './Components/Filters/Filters';
import Cards from './Components/Cards/Cards';
import PaginationPage from './Components/Pagination/PaginationPage';
import Search from './Components/Search/Search';
// import NavBar from './Components/NavBar/NavBar';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* NAV BAR IS IN PROGRESS  */}
      {/* <Box>
        <NavBar/>
      </Box> */}
      <Box
        sx={{
          maxWidth: '1500px',
          margin: 'auto',
          padding: '0px 20px 100px 20px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            margin: '30px 0'
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
            Rick & Morty <span className='secondary-color'>World</span>
          </Typography>
        </Box>

        {/* Search */}
        <Box>
          <Search />
        </Box>

        {/* Pagination  */}
        <Box>
          <PaginationPage />
        </Box>

        <Grid container spacing={2}>
          {/* Filters */}
          <Grid item xs={12} md={2}>
            <Filters />
          </Grid>

          {/* Cards section */}
          <Grid item xs={12} md={10}>
            <Cards />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
