import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Popup from './components/Popup/Popup';
import headphone from './assets/hero/headphone.png';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/LoginPage'

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Aug to 28 Sep",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "An Awesome Musical and Gaming Sound Effects for your Gaming and Relaxing Time",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Aug to 20 Aug",
  image: smartwatch2,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "An Awesome Musical and Gaming Sound Effects for your Gaming and Relaxing Time",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <Router>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero handleOrderPopup={handleOrderPopup} />
              <Category />
              <Category2 />
              <Services />
              <Banner data={BannerData} />
              <Products />
              <Banner data={BannerData2} />
              <Partners />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      </div>
    </Router>
  );
};

export default App;
