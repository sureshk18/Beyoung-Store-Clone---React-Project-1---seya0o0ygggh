import React from "react";
import "../styles/Navbar.css";
import Navbar from "../Pages/Navbar";
import Home from "../Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Upcoming from "../Pages/Upcoming";
import TrackOrders from "../Morepages/TrackOrders";
import Footer from "../Morepages/Footer";
import ProductDetails from "../Pages/ProductDetails";
import MyAccount from "../myaccounts/myAccount";
import ProtectedComponent from "../Context/ProtectedComponent";
import SearchPage from "../Pages/SearchPage";
import MyOrder from "../myaccounts/myOrder";
import Cart from "../Pages/Cart";
import Buy from "../Pages/Buy";
import MixCloths from "../cloths/mixcloths";
import Wishlist from "../Pages/Wishlist";
// import MyProfile from "../myaccounts/MyProfile";
import Address from "../Payment/Address";
import PaymentCheckout from "../Payment/PaymentCheckout";
import ThanksPage from "../Payment/ThanksPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/allcloths" element={<MixCloths />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/Combos" element={<Upcoming />}></Route>
          <Route path="/track-orders" element={<TrackOrders />}></Route>
          <Route path="/product-details/:_id" element={<ProductDetails />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          
          <Route path="/" element={<ProtectedComponent><MyAccount /></ProtectedComponent>}>
            {/* <Route path="/myprofile" element={<MyProfile />} /> */}
            {/* <Route path="/orders" element={<MyOrder />} /> */}
          </Route>

          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Buy />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payment" element={<PaymentCheckout />} />
          <Route path="/thankyou" element={<ThanksPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
