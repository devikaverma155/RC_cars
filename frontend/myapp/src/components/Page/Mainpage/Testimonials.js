import React from 'react'
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import TestimonialCard from './TestimonialCards';

const cards = [
  { title: 'Car 1', image: 'https://via.placeholder.com/300x200', description: 'Pre-loved car 1 description' },
  { title: 'Car 2', image: 'https://via.placeholder.com/300x200', description: 'Pre-loved car 2 description' },
  { title: 'Car 3', image: 'https://via.placeholder.com/300x200', description: 'Pre-loved car 3 description' },

  // Add more cards as needed
];

function CardGrid() {
  return (
    <Box sx={{ background: 'white', py: 8 }}>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 4, 
            color:'black',
            textAlign: 'center' ,
            marginTop:'4vh'
          }}
        >
          hundereds of happy customers
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
            <TestimonialCard></TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CardGrid
