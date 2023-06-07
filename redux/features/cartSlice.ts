import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface FoodProduct {
  title: string;
  description: string;
  price: string;
  image: string;
  restaurantName: string;
  checkboxValue: boolean;
}
type cartState = {
  selectedItems: {
    items: FoodProduct[];
    restaurantName: string;
  };
};

const initialState: cartState = {
  selectedItems: { items: [], restaurantName: '' },
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<FoodProduct>) => {
      if (action.payload.checkboxValue) {
        console.log('ADD TO CART');

        state.selectedItems = {
          items: [...state.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log('REMOVE FROM CART');
        state.selectedItems = {
          items: [
            ...state.selectedItems.items.filter((item) => item.title !== action.payload.title),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
    },
  },
});
export const { addToCart } = cartSlice.actions;
export const cartSelector = (state: RootState) => state.cartReducer;
export default cartSlice.reducer;
