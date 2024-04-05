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
import WinterWear from '../Pages/WinterWear';
import ProductDetails from '../Pages/ProductDetails';
import SearchPage from '../Morepages/SearchPage';
import Shirt from '../Men/Shirt';
import Hoodie from '../Men/Hoodie';
import Kurtas from '../Men/Kurtas';
import Tshirt from '../Men/Tshirt';
import Sweater from '../Men/Sweater';
import Tracksuit from '../Men/Tracksuit';




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
        <Route path='/track-orders' element={<TrackOrders />}></Route>
        <Route path='/winterwear' element={<WinterWear />}></Route>
        <Route path='/product-details/:_id' element={<ProductDetails />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        {/*men & women */}
        <Route path='/shirts' element={<Shirt />}></Route>
        <Route path='/hoodie' element={<Hoodie />}></Route>
        <Route path='/kurtas' element={<Kurtas />}></Route>
        <Route path='/t-shirts' element={<Tshirt />}></Route>
        <Route path='/sweater' element={<Sweater />}></Route>
        <Route path='/tracksuit' element={<Tracksuit />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
