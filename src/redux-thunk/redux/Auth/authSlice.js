import { createSlice } from '@reduxjs/toolkit'
import { adminLogin, adminLogout } from 'redux-thunk/thunk/Auth/Auth'
const defaultAuthState = {}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: defaultAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, action) => {
        return {
          ...defaultAuthState
        }
      })
      .addCase(adminLogout.fulfilled, (state, action) => {
        return {
          ...defaultAuthState
        }
      })
  }
})

export default authSlice.reducer
