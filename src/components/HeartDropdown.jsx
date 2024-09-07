import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';

const HeartDropdown = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg p-4 z-50">
      {wishlistItems.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <div className='flex items-center space-x-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <h4 className="font-semibold text-gray-800 dark:text-white">{item.name}</h4>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeartDropdown;
