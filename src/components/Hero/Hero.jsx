import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../Shared/Buton";

const HeroData = [
  {
    id: 1,
    img: Image1,
    subtitles: "Beats Solo",
    title: "Wireless",
    title2: "Headphones",
    description: "Wireless Headphones are used for the wireless interface and can be used for other devices like phones and tablets with features like Bluetooth."
  },
  {
    id: 2,
    img: Image2,
    subtitles: "Virtual Reality",
    title: "Wireless",
    title2: "VR",
    description: "Wireless VR devices provide an immersive experience and can be used with other devices like phones and tablets with features like Bluetooth."
  },
  {
    id: 3,
    img: Image3,
    subtitles: "Apple",
    title: "MacBook",
    title2: "Pro",
    description: "The MacBook Pro is a high-performance laptop with advanced features like Retina display, powerful processors, and long battery life."
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='container'>
      <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
          <Slider {...settings}>
            {HeroData.map((data) => (
              <motion.div
                key={data.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                  <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <motion.h1
                      className='text-2xl sm:text-6xl lg:text-2xl font-bold'
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {data.subtitles}
                    </motion.h1>
                    <motion.h1
                      className='text-5xl sm:text-6xl lg:text-2xl font-bold'
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    >
                      {data.title}
                    </motion.h1>
                    <motion.h1
                      className='text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold'
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    >
                      {data.title2}
                    </motion.h1>
                    <div>
                      <Button text="Shop By Category" bgColor="bg-primary" textColor="text-white" handler={handleOrderPopup} />
                    </div>
                  </div>
                  <div className='order-1 sm:order-2'>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 2 }}
                    >
                      <img src={data.img} alt="" className='w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40' />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
