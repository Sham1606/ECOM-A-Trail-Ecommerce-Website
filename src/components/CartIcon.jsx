import React from 'react';
import { useSelector } from 'react-redux';
import { FaCartShopping } from 'react-icons/fa6';

const CartIcon = () => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="relative">
      <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
      {cartQuantity > 0 && (
        <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
          {cartQuantity}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
