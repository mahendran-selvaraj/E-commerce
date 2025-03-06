import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Mobiles from './screens/Mobiles';
import Appliances from './screens/Appliances';
import Groceries from './screens/Groceries';
import Fashion from './screens/Fashion';
import FashionEachProduct from './screens/FashionEachProduct';
import Cart from './screens/Cart';
import Display from './screens/Display';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/mobile' element={<Mobiles />} />
          <Route path='/appliances' element={<Appliances />} />
          <Route path='/groceries' element={<Groceries />} />
          <Route path='/fa/:val' element={<FashionEachProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/display/:productId' element={<Display />} />
        </Routes>
        </>
  );
}

export default App;
