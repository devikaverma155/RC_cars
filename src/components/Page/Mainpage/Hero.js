import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from '../Mainpage/HeroImg.jpeg';

function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        background: '',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' }, // Swap columns for md and above
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px', // Ensure some padding for smaller screens
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          width: '100%', // Set width to 100% to fill the grid area
          padding: { xs: '0 1rem', md: '0 3rem' }, // Add padding for better spacing
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 1, // Adjust margin bottom
            fontSize: { xs: '2rem', md: '4rem' }, // responsive font size
            color: 'black',
            textAlign: { xs: 'center', md: 'left' }, // Center align on xs, left align on md and above
          }}
        >
          Find Your Perfect <br></br> <Typography variant="h1"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 1, // Adjust margin bottom
            fontSize: { xs: '2rem', md: '4rem' }, // responsive font size
            color: 'rgb(190,81,68)',
            textAlign: { xs: 'center', md: 'left' }, // Center align on xs, left align on md and above
          }}> Pre-Loved </Typography>Car
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: 4, // margin bottom
            fontSize: { xs: '1rem', md: '1.5rem' }, // responsive font size
            color: 'gray',
            textAlign: { xs: 'center', md: 'left' }, // Center align on xs, left align on md and above
          }}
        >
          Discover our curated selection of quality pre-owned vehicles, meticulously inspected and ready for a new home.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'left' } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(25,52,93',
              color: 'white',
              '&:hover': {
                backgroundColor: 'grey',
              },
              fontSize: { xs: '1rem', md: '1rem' }, // responsive font size
              padding: { xs: '0.5rem 1rem', md: '0.75rem 1.5rem' }, // responsive padding
            }}
            href="/carslisting"
          >
            Explore
          </Button>
        </Box>
      </Container>
      <Box
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
        }}
      />
    </Box>
  );
}

export default Hero;