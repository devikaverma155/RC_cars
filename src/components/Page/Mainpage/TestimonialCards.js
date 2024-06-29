import React from 'react';
import { Card, CardMedia, CardActionArea } from '@mui/material';

function TestimonialCard({ image, title }) {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        margin: 'auto', 
        marginTop: '3vh',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '8px 14px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={image}
          alt={title}
          sx={{
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
            },
          }}
        />
      </CardActionArea>
    </Card>
  );
}

export default TestimonialCard;