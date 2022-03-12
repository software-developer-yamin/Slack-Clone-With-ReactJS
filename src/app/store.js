import { configureStore } from '@reduxjs/toolkit';
import roomReducer from '../features/rooms/roomSlice';

export const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});
