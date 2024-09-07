import React from 'react';
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa';

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
    title: 'Car Service',
    description: 'Our friendly mechanics will clean, detail, and check your car for any issues.',
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: 'Customer Support',
    description: 'We offer 24/7 customer support, so you don’t have to worry about any issues.',
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: 'Payment Protection',
    description: 'We offer a 100% money-back guarantee if you are unhappy with our service.',
  },
  {
    id: 4,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: 'Quality Guarantee',
    description: 'We will replace your car if it does not meet our quality standards.',
  }
];

const Services = () => {
  return (
    <div className='container py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {ServiceData.map(service => (
          <div 
            key={service.id} 
            className='text-center p-4 border border-gray-200 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700'
          >
            <div className='mb-4'>
              {service.icon}
            </div>
            <h3 className='text-xl font-semibold mb-2 dark:text-white'>{service.title}</h3>
            <p className='text-gray-600 dark:text-gray-300'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
