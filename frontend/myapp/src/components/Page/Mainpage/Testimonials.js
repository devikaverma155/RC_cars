import React from 'react'
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import TestimonialCard from './TestimonialCards';
import Image1 from './custom1.jpeg'
import Image2 from './custom2.jpeg'
import Image3 from './custom3.jpeg'

const cards = [
  { title: 'Car 1', image: `${Image1}`, description: 'Pre-loved car 1 description' },
  { title: 'Car 2', image: `${Image2}`, description: 'Pre-loved car 2 description' },
  { title: 'Car 3', image: `${Image3}`, description: 'Pre-loved car 3 description' },

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
          Hundereds of happy customers!!
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
            <TestimonialCard image={card.image} ></TestimonialCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CardGrid
