// src/redux/cartSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: {
  item: any[],
  totalAmount: number;
  delivery_fee: string;
  resturent_slug: string;

} = { item: [], totalAmount: 0, delivery_fee: "10", resturent_slug: '' };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      state.item.push({ ...action.payload });
    },
    updateCartItem: (state, action: PayloadAction<any>) => {
      let itemInCart = state.item.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.note = action.payload.note
      } else {
        state.item.push({ ...action.payload, quantity: 1, note: action.payload.note });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.item.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.item.filter((item) => item.id !== action.payload);
      state.item = removeItem;
    },
    updateResturantSlug: (state, action) => {
      state.resturent_slug = action.payload.resturent_slug;
    },
    resetCart: (state) => {
      state.item = [];
      state.resturent_slug = '[]';
      state.delivery_fee = '10';
      state.totalAmount = 0;
    }
  },
});


export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  updateCartItem,
  resetCart, updateResturantSlug
} = cartSlice.actions;
export default cartSlice.reducer;