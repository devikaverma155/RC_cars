import React, { useState, useEffect } from 'react';
import { Card,CardContent,CardActions,IconButton, CardMedia,Box, Typography, useMediaQuery, useTheme, Button,TextField, Container,Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firebase from 'firebase/compat/app'; // Import the Firebase app module
import 'firebase/compat/database'; // Import the Firebase Realtime Database module
import Image from '../Carlistingpage/banner.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
const firebaseConfig = {
  apiKey: "AIzaSyC48_1pWAT595IlcGgWcVFp2UJbgsTLIYM",
  authDomain: "rcregalcars.firebaseapp.com",
  projectId: "rcregalcars",
  storageBucket: "rcregalcars.appspot.com",
  messagingSenderId: "161162509749",
  appId: "1:161162509749:web:f04e53fcc5feb61f5c6dfc"
};



firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const Filter = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [carData, setCarData] = useState([]);
const isAdmin = props.isAdmin;

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const snapshot = await database.ref('carsinfo').once('value');
        const data = snapshot.val();
        if (data) {
          const cars = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          console.log(data)
          setCarData(cars);
        }
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);
  const [carInfo, setCarInfo] = useState({
    adminKey: '',
  });
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    color: '',
    fuelType: '',
    transmission: '',
    minMileage: '',
    maxMileage: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleDelete = (id) => {
    if (isAdmin) {
      database.ref(`carsinfo/${id}`).remove()
        .then(() => {
          console.log('Car data deleted successfully');
          setCarData(carData.filter(car => car.id !== id));
        })
        .catch(error => {
          console.error('Error deleting car data:', error);
        });
    } else {
      console.log('You do not have permission to delete car data');
    }
  };
 

  const filteredCarData = carData.filter((car) => {
    const { make, model, year, price, color, fuelType, transmission, mileage } = car;
    const { 
      make: filterMake, 
      model: filterModel, 
      year: filterYear, 
      minPrice, 
      maxPrice,
      color: filterColor,
      fuelType: filterFuelType,
      transmission: filterTransmission,
      minMileage,
      maxMileage
    } = filters;


    return (
      (!filterMake || make.toLowerCase().includes(filterMake.toLowerCase())) &&
      (!filterModel || model.toLowerCase().includes(filterModel.toLowerCase())) &&
      (!filterYear || year === Number(filterYear)) &&
      (!minPrice || price >= Number(minPrice)) &&
      (!maxPrice || price <= Number(maxPrice)) &&
      (!filterColor || color.toLowerCase().includes(filterColor.toLowerCase())) &&
      (!filterFuelType || fuelType === filterFuelType) &&
      (!filterTransmission || transmission === filterTransmission) &&
      (!minMileage || mileage >= Number(minMileage)) &&
      (!maxMileage || mileage <= Number(maxMileage))
    );
  });
  return (
    <Box sx={{overflowX:'clip'}}>
    
    <Box 
        sx={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '50vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:isSmallScreen?'10vh':'',
          overflowX:'hidden'
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            marginLeft:'2vw'
          }}
        >
          Welcome to Our Car Dealership
        </Typography>
      </Box>

      <Container 
  sx={{
    marginTop: '4vh',
    padding: '2vh',
    borderRadius: '10px',
    backgroundColor: 'white',
    overflowX:'hidden'
  }}
>
  <Typography
    variant="h4"
    component="h4"
    sx={{
      fontWeight: 'bold',
      mb: 4,
      color: 'black',
      textAlign: 'center',
    }}
  >
    Find the right choice for you 
  </Typography>
  <Container
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '1rem',
      alignItems: 'center',
    }}
  >
    <TextField
      label="Make"
      name="make"
      value={filters.make}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    />
    <TextField
      label="Model"
      name="model"
      value={filters.model}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    />
    <TextField
      label="Year"
      name="year"
      type="number"
      value={filters.year}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    />
    <TextField
      label="Min Price"
      name="minPrice"
      type="number"
      value={filters.minPrice}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    />
    <TextField
      label="Max Price"
      name="maxPrice"
      type="number"
      value={filters.maxPrice}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    />

  <TextField
      label="Color"
      name="color"
      type="text"
      value={filters.color}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    />
    <TextField
      label="Fuel Type"
      name="fuelType"
      type="text"
      value={filters.fuelType}
      onChange={handleFilterChange}
      sx={{
        marginRight: { md: '1rem', xs: '0' },
        width: { md: '30vw', xs: '90%' },
        backgroundColor: 'lightgrey',
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'blue',
          },
        },
      }}
    /><TextField
    label="Transmission"
    name="transmission"
    type="text"
    value={filters.transmission}
    onChange={handleFilterChange}
    sx={{
      marginRight: { md: '1rem', xs: '0' },
      width: { md: '30vw', xs: '90%' },
      backgroundColor: 'lightgrey',
      '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
          borderColor: 'blue',
        },
      },
    }}
  />

  </Container>
</Container>
<Container>
<Grid container spacing={2} sx={{ padding: '20px' }} >
  {filteredCarData && filteredCarData.map((car) => (
    <Grid item xs={12} sm={6} md={4} key={car.id}>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)',
          },
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
        }}
      >
{ car.images && 
<CardMedia
  sx={{
    position: 'relative',
   
    overflow: 'hidden',
  }}
>
  <Carousel
    showThumbs={false}
    infiniteLoop
    useKeyboardArrows
    autoPlay
    showArrows={true}
    showStatus={false}
    showIndicators={true}
    interval={5000}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
  >
    {car.images &&
      car.images.map((image, index) => (
        <div 
          key={index} 
          style={{ 
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
          }}
        >
          <img
            src={image}
            alt={`${car.make} ${car.model}`}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      ))}
  </Carousel>
</CardMedia>}
        <CardContent sx={{ flexGrow: 1, padding: '16px' }}>
          <Typography variant="h6" component="div" gutterBottom>
            {car.make} {car.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Year: {car.year} | Price: ${car.price.toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Color: {car.color} | Mileage: {car.mileage.toLocaleString()} miles
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fuel Type: {car.fuelType}
          </Typography>
        </CardContent>
        {isAdmin && (
          <CardActions sx={{ justifyContent: 'flex-end', padding: '8px 16px' }}>
            <IconButton
              onClick={() => handleDelete(car.id)}
              size="small"
              color="error"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </Grid>
  ))}
</Grid>
</Container>

    </Box>
    );
};

export default Filter;