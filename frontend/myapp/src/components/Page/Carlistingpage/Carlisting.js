import React, { useState, useEffect } from 'react';
import { Card, CardMedia,Box, Typography, useMediaQuery, useTheme, Button,TextField, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firebase from 'firebase/compat/app'; // Import the Firebase app module
import 'firebase/compat/database'; // Import the Firebase Realtime Database module
import Image from '../Carlistingpage/banner.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
const firebaseConfig = {
  apiKey: "AIzaSyDmO0vrdLTY0D2I8WMHc7N6h4SE2rZWes0",
  authDomain: "regalcars-6c6e2.firebaseapp.com",
  databaseURL: "https://regalcars-6c6e2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "regalcars-6c6e2",
  storageBucket: "regalcars-6c6e2.appspot.com",
  messagingSenderId: "33147586232",
  appId: "1:33147586232:web:181e698ceaabb724e6164d",
  measurementId: "G-FL04JYNYSK"
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
  });
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
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredCarData = carData.filter((car) => {
    const { make, model, year, price } = car;
    const { make: filterMake, model: filterModel, year: filterYear, minPrice, maxPrice } = filters;

    return (
      (!filterMake || make.toLowerCase().includes(filterMake.toLowerCase())) &&
      (!filterModel || model.toLowerCase().includes(filterModel.toLowerCase())) &&
      (!filterYear || year === Number(filterYear)) &&
      (!minPrice || price >= Number(minPrice)) &&
      (!maxPrice || price <= Number(maxPrice))
    );
  });
  return (
    <>
    
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
          marginTop:'12vh'
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
    Filter
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



      {filteredCarData &&
        filteredCarData.map((car) => (
          <Card
            key={car.id}
            sx={{
              display: 'flex',
              flexDirection: isSmallScreen ? 'column' : 'row',
              width: '80%',
              margin: '20px auto',
             height:'60vh',
              color: 'white',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
              },
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            <CardMedia
              component="div"
              sx={{
                flex: '1 1 50%',
                padding: '20px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '10vh',
              }}
            >
              <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {car.images &&
                  car.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Carousel item ${index}`} style={{ width: '100%', height: 'auto' }} />
                    </div>
                  ))}
              </Carousel>
            </CardMedia>
            <Box sx={{ flex: '1 1 50%', padding: '20px', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop:'10%' }}>
              <div>
                <Typography variant="h5" component="div">
                 {car.make} 
                </Typography>
                <Typography variant="h5" component="div">
               Car Model: {car.model}
                </Typography>
                
                <Typography variant="h5" color="text.primary">
                  Year: {car.year} <br />
                  Price: {car.price}
                </Typography>
              </div>
              {isAdmin && (
                <Button variant="contained"  onClick={() => handleDelete(car.id)} sx={{
                  background: 'transparent',
                  color: 'white',
                  marginTop: '5vh',
                  width: '10vw',
                  height:'7vh',
               
                  '&:hover': {
                      backgroundColor: 'white',
                    },
                }}>
                 <DeleteIcon sx={{color:'black'}}></DeleteIcon>
                </Button>
              )}
            </Box>
          </Card>
        ))}
    </>);
};

export default Filter;