import { configureStore } from '@reduxjs/toolkit'
import userSlice from './module/address.js';

export default configureStore({
  reducer: {
    user: userSlice,
  },
})
