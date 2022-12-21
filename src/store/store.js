import { configureStore } from '@reduxjs/toolkit';
import { photosSlice } from './photosSlice';


export const store = configureStore({
  reducer: {
    photo: photosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})
