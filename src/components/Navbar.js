import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container , Link } from '@mui/material';
import {useTheme,useMediaQuery} from  '@mui/material'
import { useEffect } from 'react';
const drawerWidth = 240;


function DrawerAppBar(props) {
  const [isAdmin , setIsAdmin]=useState(false)
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin) {
      setIsAdmin(JSON.parse(storedIsAdmin));
    }
  }, []);
  const { window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
    
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
   
      <Divider />
      <List>
<Link
        variant="h6"
        sx={{
          my: 2,
          color: 'black',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
        href='/'
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '5vw',
            padding: 0,
            
          }}
      
        >
      
          <Box
            sx={{
              background: 'rgb(56,77,125)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              fontWeight: 'bold',
              marginRight: '10px',
            }}
          >
            RC
          </Box>
          <Typography variant="h6">Regal Cars</Typography>
        </Container>
      </Link>
      
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'black' }} href='/' >
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'black' }} href='/carslisting'>
              <ListItemText primary='View Cars' />
            </ListItemButton>
          </ListItem>
         {isAdmin &&  <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'black' }} href='/form'>
              <ListItemText primary='Add Cars'/>
            </ListItemButton>
          </ListItem>}
         { !isAdmin && 
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color: 'black' }} href='/admin'>
              <ListItemText primary='Admin'/>
            </ListItemButton>
          </ListItem>}
      </List>
    </Box> </>
     

  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const theme=useTheme();
  const match=useMediaQuery(theme.breakpoints.down('sm'));
  
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <AppBar component="nav" sx={{ background: 'white', boxShadow: 'none' , paddingTop:'2vh' , paddingBottom:'1vh' }}>
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: 'black' }}
            >

    <Box
      sx={{
        background: 'rgb(56,77,125)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginRight: '10px',
      }}
    >
      RC
    </Box>
    


            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                color: 'black', 
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'bold' 
              }}
            >
             
             
              <Link
  variant="h6"
  sx={{
    my: 2,
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  }}
  href='/'
>
  <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      marginLeft: '5vw',
      padding: 0,
      
    }}

  >

    <Box
      sx={{
        background: 'rgb(56,77,125)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginRight: '10px',
      }}
    >
      RC
    </Box>
    <Typography variant="h6">Regal Cars</Typography>
  </Container>
</Link>
             
     
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, color: 'black' }}>
             
                <Button sx={{ color: 'black' }}  href='/'>
                 Home
                </Button>
                <Button sx={{ color: 'black' }} href='/carslisting'>
                 View Cars
                </Button>
                {!isAdmin && 
                <Button sx={{ color: 'black' }} href='/admin'>
                    Admin
                </Button>}
                {isAdmin &&  
                <Button sx={{ color: 'black' }} href='/form'>
                  Add Cars
                </Button>}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
      <Typography
              variant="h6"
              component="div"
              sx={{ 
                flexGrow: 1, 
                color: 'black', 
                display: { xs: 'none', sm: 'block' },
                fontWeight: 'bold' 
              }}
            >
             
             
              <Link
  variant="h6"
  sx={{
    my: 2,
    color: 'black',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  }}
  href='/'
>
  <Container
    sx={{
      display: 'flex',
      alignItems: 'center',
      marginLeft: '5vw',
      padding: 0,
      
    }}

  >

    <Box
      sx={{
        background: 'rgb(56,77,125)',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        marginRight: '10px',
      }}
    >
      RC
    </Box>
    <Typography variant="h6">Regal Cars</Typography>
  </Container>
</Link>
             
     
            </Typography>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            color: 'black',
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
