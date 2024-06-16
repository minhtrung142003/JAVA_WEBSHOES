// cartSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addCard } from '../detailproduct/DetailApi';
import { delCart, getListCart } from './CartApi';

// thêm sản phẩm vào giỏ hàng
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (payload, thunkAPI) => {
    try {
      const response = await addCard(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//  xoá sản phẩm khỏi giỏ hàng
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (cartId, thunkAPI) => {
    try {
      await delCart(cartId); 
      return cartId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// cập nhật giỏ hàng
export const updateCartItems = createAsyncThunk(
  'cart/updateCartItems',
  async (userId, thunkAPI) => {
    try {
      const response = await getListCart(userId); 
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [], 
  status: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart(state) {
      state.cartItems = [];
      localStorage.setItem('cart', JSON.stringify([]));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = state.cartItems.filter(item => item.cartId !== action.payload);
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload; 
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
export const {resetCart} = cartSlice.actions;
