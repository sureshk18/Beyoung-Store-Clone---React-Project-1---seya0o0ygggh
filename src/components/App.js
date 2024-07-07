import React from 'react';
import '../styles/Navbar.css';
import Navbar from '../Pages/Navbar';
import Home from '../Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Men from '../Pages/Men';
import Women from '../Pages/Women';
import Upcoming from '../Pages/Upcoming';
import TrackOrders from '../Morepages/TrackOrders';
import Footer from '../Morepages/Footer';
import ProductDetails from '../Pages/ProductDetails';
// import MyAccount from '../myaccounts/myAccount';
import ProtectedComponent from '../Context/ProtectedComponent';
import SearchPage from '../Pages/SearchPage';
import { CartNumberProvider } from '../Context/CartNumberContext';
// import MyOrder from '../myaccounts/myOrder';
import Cart from '../Pages/Cart';
import Buy from '../Pages/Buy';
import MixCloths from '../cloths/mixcloths'
import Wishlist from '../Pages/Wishlist';
// import MyProfile from '../myaccounts/MyProfile';



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
        <Route path='/Combos' element={<Upcoming />}></Route>
        <Route path='/track-orders' element={<TrackOrders />}></Route>
        <Route path='/product-details/:_id' element={<ProductDetails />}></Route>
        <Route path='/search' element={<SearchPage />}></Route>
        {/* <Route path="/" element={<ProtectedComponent><MyAccount /></ProtectedComponent>}>
        <Route path="/myprofile" element={<MyProfile />} /> 
          <Route path="/orders" element={<MyOrder />} />
           <Route path="/address" element={<MyAddress />} /> 
        </Route>*/}


        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/buy' element={<Buy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import _debounce from "lodash/debounce";
// const App = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState(null);
//   const config = {
//     headers: {
//       projectID: "7k1ct68pbbmr",
//     },
//   };
//   const fetchData = async () => {
//     if (isFetching) {
//       return;
//     }
//     try {
//       setIsFetching(true);
//       const res = await axios.get(
//         `https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}`,
//         config
//       );
//       setData((prevData) => [...prevData, ...res.data.data]);
//       setPage((prevPage) => prevPage + 1);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again.");
//     } finally {
//       setIsFetching(false);
//     }
//   };
//   const handleScroll = _debounce(() => {
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     const clientHeight = document.documentElement.clientHeight;
//     if (scrollTop + clientHeight >= scrollHeight - 100) {
//       fetchData();
//     }
//   }, 200); // Adjust the debounce delay as needed
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);
//   // Fetch data initially
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//     {data.length > 0 &&
//       data.map((item, index) => (
//         <div key={index}>
//           <div>
//             <img
//               src={item.author.profileImage}
//               alt="author Image"
//               style={{ width: "3rem" }}
//             />
//             <h5>{item.author.name}</h5>
//             <p>{item.content}</p>
//             <img src={item.images[0]} width={650} alt="channel Image" />
//             <p>likeCount: {item.likeCount}</p>
//             <p>comments: {item.commentCount}</p>
//           </div>
//         </div>
//       ))}
//     {isFetching && <p>Loading...</p>}
//     {error && <p style={{ color: "red" }}>{error}</p>}
//   </div>
//   );
// };
// export default App;











// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import _debounce from "lodash/debounce";
// const App = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState(null);
//   const config = {
//     headers: {
//       projectID: "7k1ct68pbbmr",
//     },
//   };
//   const fetchData = async () => {
//     if (isFetching) {
//       return;
//     }
//     try {
//       setIsFetching(true);
//       const res = await axios.get(
//         `https://academics.newtonschool.co/api/v1/reddit/post?limit=10&page=${page}`,
//         config
//       );
//       setData((prevData) => [...prevData, ...res.data.data]);
//       setPage((prevPage) => prevPage + 1);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError("Error fetching data. Please try again.");
//     } finally {
//       setIsFetching(false);
//     }
//   };
//   const handleScroll = _debounce(() => {
//     const scrollTop = document.documentElement.scrollTop;
//     const scrollHeight = document.documentElement.scrollHeight;
//     const clientHeight = document.documentElement.clientHeight;
//     if (scrollTop + clientHeight >= scrollHeight - 100) {
//       fetchData();
//     }
//   }, 200); // Adjust the debounce delay as needed
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [handleScroll]);
//   // Fetch data initially
//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
//     <div>
//     {data.length > 0 &&
//       data.map((item, index) => (
//         <div key={index}>
//           <div>
//             <img
//               src={item.author.profileImage}
//               alt="author Image"
//               style={{ width: "3rem" }}
//             />
//             <h5>{item.author.name}</h5>
//             <p>{item.content}</p>
//             <img src={item.images[0]} width={650} alt="channel Image" />
//             <p>likeCount: {item.likeCount}</p>
//             <p>comments: {item.commentCount}</p>
//           </div>
//         </div>
//       ))}
//     {isFetching && <p>Loading...</p>}
//     {error && <p style={{ color: "red" }}>{error}</p>}
//   </div>
//   );
// };
// export default App;











