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
import Shopbycollection from '../Pages/Shopbycollection';
import MyAccount from '../myaccounts/myAccount';
// import MyProfile from '../myaccounts/MyProfile';
import ProtectedComponent from '../Context/ProtectedComponent';
import SearchPage from '../Pages/SearchPage';
import { CartNumberProvider } from '../Context/CartNumberContext';
import MyOrder from '../myaccounts/myOrder';
import Cart from '../Pages/Cart';
import Buy from '../Pages/Buy';
import MixCloths from '../cloths/mixcloths'
function App() {
  return <>
    <BrowserRouter>
      <CartNumberProvider />
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/allcloths' element={<MixCloths />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/Combos' element={<Combos />}></Route>
        <Route path='/joggers' element={<Joggers />}></Route>
        <Route path='/track-orders' element={<TrackOrders />}></Route>
        <Route path='/winterwear' element={<WinterWear />}></Route>
        <Route path='/shopbycollection' element={<Shopbycollection />}></Route>
        <Route path='/product-details/:_id' element={<ProductDetails />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        <Route path="/" element={<ProtectedComponent><MyAccount /></ProtectedComponent>}>
          {/* <Route path="/myprofile" element={<MyProfile />} /> */}
          <Route path="/orders" element={<MyOrder />} />
          {/* <Route path="/address" element={<MyAddress />} /> */}
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='buy' element={<Buy/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
