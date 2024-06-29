import React, { useState , useEffect } from 'react'
import DrawerAppBar from '../../Navbar'
import Filter from './Carlisting'
import Footer from '../../Footer';
import { Box } from '@mui/material';
function Carspage(props) {

 const [isAdmin , setIsAdmin]=useState(false)
  useEffect(() => {
    const storedIsAdmin = localStorage.getItem('isAdmin');
    if (storedIsAdmin) {
      setIsAdmin(JSON.parse(storedIsAdmin));
    }
  }, []);
  return (
    <Box sx={{overflowX:'hidden'}}>
    <DrawerAppBar isAdmin={isAdmin}> </DrawerAppBar>
      <Filter isAdmin={isAdmin} ></Filter>
      <Footer></Footer>
      </Box>
  )
}

export default Carspage