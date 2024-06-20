import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

function TestimonialCard({ image, title }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' , marginTop:'3vh'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={image}
          alt={title}
        />
        
      </CardActionArea>
    </Card>
  );
}

export default TestimonialCard;
