import React from 'react';
import '../styles/Navbar.css';
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Men from '../Pages/Men';
import Women from '../Pages/Women';
import Combos from '../Pages/Combos';
import Joggers from '../Pages/Joggers';
import TrackOrders from '../Morepages/TrackOrders';
import Footer from '../Morepages/Footer';
import Login from '../Login/Login';


function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/Combos' element={<Combos />}></Route>
        <Route path='/joggers' element={<Joggers />}></Route>
        <Route path='/trackorders' element={<TrackOrders />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
