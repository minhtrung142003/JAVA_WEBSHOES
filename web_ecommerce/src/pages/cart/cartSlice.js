// cartSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addCard } from '../detailproduct/DetailApi';
import { delCart, getListCart } from './CartApi';

// Async thunk để thêm sản phẩm vào giỏ hàng
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

// Async thunk để xoá sản phẩm khỏi giỏ hàng
export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (cartId, thunkAPI) => {
    try {
      await delCart(cartId); // Gọi API để xoá sản phẩm
      return cartId; // Trả về cartId của sản phẩm đã xoá để cập nhật state
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk để cập nhật giỏ hàng
export const updateCartItems = createAsyncThunk(
  'cart/updateCartItems',
  async (userId, thunkAPI) => {
    try {
      const response = await getListCart(userId); // Gọi API để lấy danh sách giỏ hàng
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [], // Lấy giỏ hàng từ localStorage
  status: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm reducers nếu cần thiết
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
        // Xoá sản phẩm khỏi giỏ hàng trong state
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
        state.cartItems = action.payload; // Cập nhật lại giỏ hàng với dữ liệu mới từ API
        localStorage.setItem('cart', JSON.stringify(state.cartItems));
      })
      .addCase(updateCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;
export const { } = cartSlice.actions;
