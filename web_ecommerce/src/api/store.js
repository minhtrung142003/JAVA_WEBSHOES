import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from '../pages/cart/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer , // Add more reducers as needed
    // Add other reducers here if you have more slices
  },
});

export default store;
