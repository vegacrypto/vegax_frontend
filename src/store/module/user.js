import { createSlice } from '@reduxjs/toolkit';
import { getToken, setCookies } from "@/utils/auth";

export const userSlice = createSlice({ // 创建一个切片
    name: 'user',
    initialState: {
      token: getToken(),
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload
        setCookies(state.token)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setToken } = userSlice.actions
  
  export default userSlice.reducer
