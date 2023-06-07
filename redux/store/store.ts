import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
