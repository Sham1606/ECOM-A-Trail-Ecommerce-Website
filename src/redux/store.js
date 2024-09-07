// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import modalReducer from './slices/modalSlice'; // Assuming you have modalSlice

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    modal: modalReducer, // Assuming modalReducer exists
  },
});

export default store;
