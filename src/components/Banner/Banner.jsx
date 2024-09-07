import React from 'react';
import { motion } from 'framer-motion';

const Banner = ({ data }) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className='container'>
        <motion.div
          style={{ backgroundColor: data.bgColor }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* first col */}
          <motion.div
            className='p-6 sm:p-8'
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className='mb-4'>{data.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold mb-4'>
              {data.title}
            </h1>
            <p className='text-sm'>{data.date}</p>
          </motion.div>
          {/* second col */}
          <motion.div
            className='h-full flex items-center'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={data.image} alt="" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover' />
          </motion.div>
          {/* third col */}
          <motion.div
            className='flex flex-col justify-center gap-4 p-6 sm:p-8'
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className='font-bold text-xl'>{data.title2}</p>
            <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
            <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
            <div>
              <button className="bg-white text-gray-800 py-2 px-4 rounded-xl transition-colors duration-300 hover:bg-black hover:text-white">
                Shop Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
