import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { addToWishlist } from '../../redux/slices/wishlistSlice';

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
        {data.map((product) => (
          <div
            className="group bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            key={product.id}
          >
            <div className="relative">
              <img
                src={product.img}
                alt={product.title}
                className="h-[200px] w-full object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-md transition duration-300 ease-in-out">
                <div className="flex space-x-2 lg:space-x-4">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-gray-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                  >
                    <FaShoppingCart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="bg-gray-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                  >
                    <FaHeart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h2 className="font-semibold text-gray-800 text-lg">{product.title}</h2>
              <p className="font-bold text-gray-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
