import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({ // 创建一个切片
    name: 'user',
    initialState: {
      loginState: null,
    },
    reducers: {
      setLoginState: (state, action) => {
        console.log('action-->',action)
        state.loginState = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setLoginState } = userSlice.actions
  
  export default userSlice.reducer
