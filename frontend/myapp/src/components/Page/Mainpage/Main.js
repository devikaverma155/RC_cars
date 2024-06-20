import React from 'react';

import Hero from '../../Page/Mainpage/Hero';
import DrawerAppBar from '../../Navbar';
import CardGrid from '../../Page/Mainpage/CarsDisplay';
// import ComplexGrid from '../Cars';
import Testimonials from '../../Page/Mainpage/Testimonials';
import Footer from '../../Footer';

function Main(props) {
  const isAdmin =props.isAdmin
  return (
    <div className="App" style={{'overflowX':'hidden'}}>

      <DrawerAppBar isAdmin={isAdmin}></DrawerAppBar>
      <Hero/>
{/* <ComplexGrid></ComplexGrid> */}
      <CardGrid></CardGrid>
      <Testimonials></Testimonials>
      <Footer></Footer>

  
    </div>
  );
}

export default  Main;
