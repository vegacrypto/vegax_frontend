import { createSlice } from '@reduxjs/toolkit';
import { getToken, setCookies } from "@/utils/auth";

export const userSlice = createSlice({ // 创建一个切片
    name: 'user',
    initialState: {
      token: getToken(),
      user: window.localStorage.getItem("user")
            ? JSON.parse(window.localStorage.getItem("user"))
            : null,
    },
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload
        setCookies(state.token)
      },
      setUser: (state, action) => {
        state.user = action.payload
        localStorage.setItem("user", JSON.stringify(state.user))
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setToken, setUser } = userSlice.actions
  
  export default userSlice.reducer
