import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterLinks = [
  {
    id: 1,
    name: 'Home',
    link: '/#'
  },
  {
    id: 2,
    name: 'Shop',
    link: '/#shop'
  },
  {
    id: 3,
    name: 'About',
    link: '/#about'
  },
  {
    id: 4,
    name: 'Blogs',
    link: '/#blog'
  }
];

const socialMediaLinks = [
  {
    id: 1,
    name: 'Facebook',
    link: 'https://facebook.com',
    icon: <FaFacebook className='text-blue-600' />
  },
  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com',
    icon: <FaTwitter className='text-blue-400' />
  },
  {
    id: 3,
    name: 'Instagram',
    link: 'https://instagram.com',
    icon: <FaInstagram className='text-pink-600' />
  },
  {
    id: 4,
    name: 'LinkedIn',
    link: 'https://linkedin.com',
    icon: <FaLinkedin className='text-blue-700' />
  }
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pb-20 pt-5'>
          <div className='py-8 px-4'>
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>ECom</a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum hic, culpa animi nemo impedit voluptas odio quis repellendus praesentium! Odio sequi aspernatur repellat deserunt atque sit necessitatibus reiciendis aperiam natus.</p>
          </div>
          <div className='col-span-2 grid grid-cols-3 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {FooterLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='text-gray-600 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300'>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>More Links</h1>
              <ul className='space-y-3'>
                {FooterLinks.map((data) => (
                  <li key={data.id}>
                    <a href={data.link} className='text-gray-600 hover:dark:text-white dark:text-gray-400 hover:text-black duration-300'>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Follow Us</h1>
              <ul className='flex space-x-4'>
                {socialMediaLinks.map((social) => (
                  <li key={social.id}>
                    <a href={social.link} className='text-gray-600 hover:text-black dark:hover:text-white duration-300'>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
