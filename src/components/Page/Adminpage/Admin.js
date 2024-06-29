import { Button, Container, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import DrawerAppBar from '../../Navbar';
import Carspage from '../Carlistingpage/Carspage';
import Main from '../Mainpage/Main';

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [carInfo, setCarInfo] = useState({ adminKey: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const checkAdmin = () => {
    if (carInfo.adminKey === 'devika123') {
      handleIsAdminChange(true);
      alert('Admin Verified');
    } else {
      handleIsAdminChange(false);
      alert('Non-admin user');
    }
  };

  const handleIsAdminChange = (newIsAdmin) => {
    setIsAdmin(newIsAdmin);
    localStorage.setItem('isAdmin', JSON.stringify(newIsAdmin));
  };

  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin !== null && storedIsAdmin !== 'undefined') {
      setIsAdmin(JSON.parse(storedIsAdmin));
    }
  }, []);

  return (
    <>
      <DrawerAppBar isAdmin={isAdmin} />
      <Container
        sx={{
          marginTop: '20vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TextField
          required
          id="adminKey"
          name="adminKey"
          label="Admin Key"
          fullWidth
          value={carInfo.adminKey}
          onChange={handleChange}
        />
        <Button
          onClick={checkAdmin}
          sx={{
            background: 'black',
            color: 'white',
            marginTop: '5vh',
            width: '30vw',
            borderRadius: '10px',
            '&:hover': {
                backgroundColor: 'grey',
              },
          }}
        >
          Check
        </Button>
      </Container>
     
        <Container sx={{display:'none'}}>
          <Carspage isAdmin={isAdmin} />
        </Container>
    
    </>
  );
};

export default Admin;
