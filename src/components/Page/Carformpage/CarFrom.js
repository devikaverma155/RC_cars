import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CarForm = () => {
  const [carInfo, setCarInfo] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    mileage: '',
    color: '',
    transmission: '',
    fuelType: '',
    images: [],
    adminKey: '',
  });

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

    // Remove the corresponding file from carInfo.images
    const updatedCarImages = [...carInfo.images];
    updatedCarImages.splice(index, 1);
    setCarInfo((prevState) => ({
      ...prevState,
      images: updatedCarImages,
    }));
  };
  const toBase64 = file => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
   
  
   
    const base64Images = await Promise.all(carInfo.images.map(toBase64));
  
    const {  make,
      model,
      year,
      price,
      mileage,
      color,
      transmission,
      fuelType,
      images,
      adminKey, } = carInfo;

  
    try {

      const response = await fetch("https://rcregalcars-default-rtdb.firebaseio.com/carsinfo.json", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({
          make,
          model,
          year,
          price,
          mileage,
          color,
          transmission,
          fuelType,
          images: base64Images,  
          adminKey,
        })
      });
  
      if (response.ok) {
        setCarInfo({make: '',
          model: '',
          year: '',
          price: '',
          mileage: '',
          color: '',
          transmission: '',
          fuelType: '',
          images: [],
          adminKey: '',})
          setSelectedImages([])
        console.log('Data sent successfully');
      } else {
        console.error('Error sending data:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    // Clean up the object URLs when the component is unmounted
    return () => {
      selectedImages.forEach(URL.revokeObjectURL);
    };
  }, [selectedImages]);



  return (
    <Container sx={{
      display:'flex', width:'60vw', alignItems:'center', justifyContent:'center', flexDirection:'column', marginTop:'5vh'
    }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          fontWeight: 'bold', 
          mb: 4, 
          color:'black',
          textAlign: 'center',
          marginTop:'10vh'
        }}
      >
        Enter The Car Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="make"
              name="make"
              label="Make"
              fullWidth
              value={carInfo.make}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="model"
              name="model"
              label="Model"
              fullWidth
              value={carInfo.model}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="year"
              name="year"
              label="Year"
              type="number"
              fullWidth
              value={carInfo.year}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="price"
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={carInfo.price}
              onChange={handleChange}
            />
          </Grid>
          {/* New fields */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="mileage"
              name="mileage"
              label="Mileage"
              type="number"
              fullWidth
              value={carInfo.mileage}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="color"
              name="color"
              label="Color"
              fullWidth
              value={carInfo.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="transmission-label">Transmission</InputLabel>
              <Select
                labelId="transmission-label"
                id="transmission"
                name="transmission"
                value={carInfo.transmission}
                label="Transmission"
                onChange={handleChange}
              >
                <MenuItem value="Automatic">Automatic</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="CVT">CVT</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel id="fuelType-label">Fuel Type</InputLabel>
              <Select
                labelId="fuelType-label"
                id="fuelType"
                name="fuelType"
                value={carInfo.fuelType}
                label="Fuel Type"
                onChange={handleChange}
              >
                <MenuItem value="Petrol">Petrol</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
              </Select>
            </FormControl>
          </Grid>
         
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
                    style={{ position: 'absolute', top: 0, right: 0, background:'transparent' }}
                    onClick={() => handleImageDelete(index)}
                  >
                    <DeleteIcon sx={{ color:'black' }}></DeleteIcon>
                  </Button>
                </div>
              ))}
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" sx={{
              background:'black', color:'white', width:'10vw', marginLeft:'40%'
            }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CarForm;