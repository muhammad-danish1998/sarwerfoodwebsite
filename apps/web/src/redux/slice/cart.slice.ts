// src/redux/cartSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: {
  item: any[],
  totalAmount: number;
  delivery_fee: string;

} = { item: [], totalAmount: 0, delivery_fee: "10" };
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
  },
});


export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  updateCartItem
} = cartSlice.actions;
export default cartSlice.reducer;