import React from 'react'
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Link } from '@mui/material'
import Image1 from './car1.jpg';
import Image2 from './car2.jpg';
import Image3 from './car3.jpg';

const cards = [
  {
    title: 'Petrol',
    image: `${Image1}`,
    description: 'Experience the classic power and performance of petrol engines, known for their quick acceleration and widespread availability.'
  },
  {
    title: 'Diesel',
    image: `${Image2}`,
    description: 'Enjoy the robust torque and fuel efficiency of diesel engines, perfect for long-distance travel and heavy-duty vehicles.'
  },
  {
    title: 'Electric',
    image: `${Image3}`,
    description: 'Discover the future of driving with electric cars, offering zero emissions, quiet operation, and instant torque for a smooth ride.'
  },

  // Add more cards as needed
];


function CardGrid() {
  return (
    <Box sx={{ background: 'white', py: 8 , marginBottom:'5vh' }}>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            mb: 4, 
            textAlign: 'center' 
          }}
        >
          Explore Our Pre-Loved Cars
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card 
                sx={{
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      fontWeight: 'bold' 
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Container sx={{display:'flex',alignItems:'center',justifyContent:'center', marginTop:'5vh'}}>
         <Link sx={{color:'black' ,underline:'black'}} href='/carslisting'>Show More</Link>
        </Container>
      </Container>
    </Box>
  )
}

export default CardGrid
