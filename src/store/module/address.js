import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      address: 0,
    },
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.address += 1
      },
      setAddress: (state, action) => {
        state.address = action.value
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, setAddress } = userSlice.actions
  
  export default userSlice.reducer
