import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping, FaCaretDown, FaBars, FaHeart } from 'react-icons/fa6';
import { IoClose } from "react-icons/io5";
import DarkMode from './DarkMode';
import LoginPage from '../Login/LoginPage';
import { useSelector, useDispatch } from 'react-redux';
import { openLoginModal, closeLoginModal } from '../../redux/slices/modalSlice';
import CartDropdown from '../CartDropdown';
import HeartDropdown from "../HeartDropdown";

const MenuLinks = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Shop', link: '/#shop' },
  { id: 3, name: 'About', link: '/#about' },
  { id: 4, name: 'Blogs', link: '/#blog' }
];

const DropdownLinks = [
  { id: 1, name: 'Trending Products', link: '/#' },
  { id: 2, name: 'Best Selling', link: '/#' },
  { id: 3, name: 'Top Rated', link: '/#' }
];

const Navbar = ({ handleOrderPopup }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const dispatch = useDispatch();
  const isLoginModalOpen = useSelector((state) => state.modal.isLoginModalOpen);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const toggleLoginModal = () => {
    if (isLoginModalOpen) {
      dispatch(closeLoginModal());
    } else {
      dispatch(openLoginModal());
    }
  };

  const closeSidebar = () => setSidebarOpen(false);

  const toggleCartDropdown = () => {
    setCartOpen(!cartOpen);
  };

  const toggleWishlistDropdown = () => {
    setWishlistOpen(!wishlistOpen); // Toggle wishlist dropdown visibility
  };

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4 px-4 md:px-8 lg:px-12 sticky top-0 bg-white dark:bg-gray-900 shadow-sm'>
        <div className='container mx-auto flex justify-between items-center'>
          {/* Logo */}
          <a href="#" className='text-primary font-semibold tracking-widest text-xl sm:text-2xl lg:text-3xl uppercase transition duration-300 hover:scale-105'>
            ECom
          </a>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center gap-8'>
            <ul className='flex items-center gap-4'>
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:translate-y-[-2px] transition-transform'>
                    {data.name}
                  </a>
                </li>
              ))}
              <li className="relative">
                <button onClick={toggleDropdown} className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 transition duration-200 hover:translate-y-[-2px]">
                  Quick Links
                  <FaCaretDown className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className='absolute z-[9999] w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                    <ul className='space-y-2'>
                      {DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a className='text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold transition-all transform hover:translate-x-2' href={data.link}>
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Icons and Buttons */}
          <div className='flex items-center gap-4'>
            {/* Search Icon/Bar */}
            <div className='relative'>
              <button onClick={toggleSearch} className='p-2 text-gray-600 dark:text-gray-400 hover:text-primary transition duration-300' aria-label="Search">
                <IoMdSearch className='text-xl' />
              </button>
              {searchOpen && (
                <div className='absolute right-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2'>
                  <input type="text" placeholder='Search' className='w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary' />
                </div>
              )}
            </div>

            {/* Wishlist Button */}
            <button className='relative p-2 transition transform duration-300 hover:scale-110' aria-label="Wishlist" onClick={toggleWishlistDropdown}>
              <FaHeart className='text-xl text-gray-600 dark:text-gray-400' />
              {wishlistItems.length > 0 && (
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                  {wishlistItems.length}
                </div>
              )}
            </button>

            {/* Wishlist Dropdown */}
            {wishlistOpen && <HeartDropdown />} {/* Render HeartDropdown when wishlist is open */}

            {/* Cart Button */}
            <button className='relative p-2 transition transform duration-300 hover:scale-110' onClick={toggleCartDropdown} aria-label="Cart">
              <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
              {cartItems.length > 0 && (
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                  {cartItems.length}
                </div>
              )}
            </button>

            {/* Cart Dropdown */}
            {cartOpen && <CartDropdown />} {/* Render CartDropdown when cart is open */}

            {/* Dark Mode Toggle */}
            <div className='hidden sm:block'>
              <DarkMode />
            </div>

            {/* Login/Signup Button */}
            <button
              onClick={toggleLoginModal}
              className='hidden md:block px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition-all duration-300 transform hover:scale-105'
            >
              Login / Signup
            </button>

            {/* Mobile Menu Button */}
            <button className='lg:hidden p-2 transition duration-300 hover:scale-105' onClick={toggleSidebar} aria-label="Menu">
              <FaBars className='text-xl text-gray-600 dark:text-gray-400' />
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-white dark:bg-gray-900 w-64 shadow-lg p-6 space-y-4">
            <button onClick={toggleSidebar} className="text-gray-600 dark:text-gray-400 text-xl transition transform hover:scale-110">
              Close
            </button>
            {/* Add sidebar links here */}
          </div>
          <div className="flex-1 bg-black opacity-50" onClick={toggleSidebar}></div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-[90%] max-w-md'>
            <button className='absolute top-4 right-4 text-gray-600 dark:text-gray-400' onClick={toggleLoginModal}>
              <IoClose className='text-xl' />
            </button>
            <LoginPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
