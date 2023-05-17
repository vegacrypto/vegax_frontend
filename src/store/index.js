import { configureStore } from '@reduxjs/toolkit'
import userSlice from './module/user.js'

export default configureStore({ // 创建一个 redux 存储
  reducer: {
    user: userSlice,
  },
})
