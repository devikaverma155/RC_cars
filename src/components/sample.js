import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const CarForm = () => {
  const [carInfo, setCarInfo] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    images: [],
    adminKey: '',
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setSelectedImages(prevImages => [...prevImages, ...newImages]);
    setCarInfo((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...files],
    }));
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages];
    const removedUrl = updatedImages.splice(index, 1)[0];
    URL.revokeObjectURL(removedUrl);
    setSelectedImages(updatedImages);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (carInfo.adminKey === 'devika') {
      setIsAdmin(true);
      console.log('Admin authenticated');
    } else {
      setIsAdmin(false);
      console.log('Non-admin user');
    }

    console.log(carInfo);
  };

  useEffect(() => {
    // Clean up the object URLs when the component is unmounted
    return () => {
      selectedImages.forEach(URL.revokeObjectURL);
    };
  }, [selectedImages]);

  return (
    <Container
      sx={{
        display: 'flex',
        height: '70vh',
        width: '60vw',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 'bold',
          mb: 4,
          color: 'black',
          textAlign: 'center',
          marginTop: '4vh',
        }}
      >
        Enter The Car Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Other form inputs */}
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="images"
              name="images"
              multiple
              type="file"
              onChange={handleImageUpload}
            />
            <Container>
              {selectedImages.map((imageUrl, index) => (
                <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
                  <img
                    src={imageUrl}
                    alt={`Selected Image ${index + 1}`}
                    style={{ maxWidth: '200px', maxHeight: '200px' }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ position: 'absolute', top: 0, right: 0 }}
                    onClick={() => handleImageDelete(index)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </Container>
          </Grid>
          {/* Other form inputs */}
        </Grid>
      </form>
    </Container>
  );
};

export default CarForm;