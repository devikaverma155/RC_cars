// src/App.js
import React from 'react';
import Main from './components/Page/Mainpage/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Carspage from './components/Page/Carlistingpage/Carspage';
import Carenter from './components/Page/Carformpage/Carenter';
import Admin from './components/Page/Adminpage/Admin';
function App() {
  return (
    
    <BrowserRouter>

<Routes >
  <Route index path='/' element={<Main/>}></Route>
  
  <Route path='/carslisting' element={<Carspage/>}></Route>
  <Route path='/form' element={<Carenter/>}></Route>
  <Route path='/admin' element={<Admin></Admin>}></Route>
  </Routes>
    </BrowserRouter>
    
    
  
 
  );
}

export default App;
