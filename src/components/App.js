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
import Shorts from '../Men/Shorts';
import Trousers from '../Men/Trousers';
import Pyjamas from '../Men/Pyjamas';
import WomensJeans from '../Women/Jeans';
import WomenShirt from '../Women/Shirt';
import WomenKurti from '../Women/Kurti';
import JumpSuit from '../Women/JumpSuit';
import WomenTshirt from '../Women/Tshirt';
import Shopbycollection from '../Pages/Shopbycollection';
import Jogger from '../Women/Jogger';
// import { useAuth } from '../Context/UserProvider';
// import AuthModalComp from '../Pages/authModal';
import myAccount from '../myaccounts/myAccount';
import myProfile from '../myaccounts/myProfile';
import ProtectedComponent from '../Context/ProtectedComponent';



function App() {

  // const { isAuthUser } = useAuth();
  // console.log(isAuthUser);
  return <>
    <BrowserRouter>
      <Navbar />
      {/* {isAuthUser ? (<AuthModalComp />) : ("")} */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/Combos' element={<Combos />}></Route>
        <Route path='/joggers' element={<Joggers />}></Route>
        <Route path='/track-orders' element={<TrackOrders />}></Route>
        <Route path='/winterwear' element={<WinterWear />}></Route>
        <Route path='/shopbycollection' element={<Shopbycollection />}></Route>
        <Route path='/product-details/:_id' element={<ProductDetails />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        {/*men  */}
        <Route path='/shirts' element={<Shirt />}></Route>
        <Route path='/hoodie' element={<Hoodie />}></Route>
        <Route path='/kurtas' element={<Kurtas />}></Route>
        <Route path='/t-shirts' element={<Tshirt />}></Route>
        <Route path='/sweater' element={<Sweater />}></Route>
        <Route path='/tracksuit' element={<Tracksuit />}></Route>
        <Route path='/shorts' element={<Shorts />}></Route>
        <Route path='/trousers' element={<Trousers />}></Route>
        <Route path='/pyjamas' element={<Pyjamas />}></Route>

        {/*women */}
        <Route path='/jeansWomen' element={<WomensJeans />}></Route>
        <Route path='/shirtsWomen' element={<WomenShirt />}></Route>
        <Route path='/kurtisWomen' element={<WomenKurti />}></Route>
        <Route path='/jumpsuit' element={<JumpSuit />}></Route>
        <Route path='/tshirtsWomen' element={<WomenTshirt />}></Route>
        <Route path='/joggersWomen' element={<Jogger />}></Route>

        <Route path="/" element={<ProtectedComponent><myAccount /></ProtectedComponent>}>
          <Route path="/myprofile" element={<myProfile />} />
        </Route>


      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
