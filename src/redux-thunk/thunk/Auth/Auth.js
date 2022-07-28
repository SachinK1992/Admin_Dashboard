import { createAsyncThunk } from '@reduxjs/toolkit'
import { ROUTE_PATHS } from 'utils/constants'
import { signIn, signOut } from 'utils/common-services/cookie.services'

/**
 * Admin Login Thunk
 */
export const adminLogin = createAsyncThunk('admin/login', async ({ username, password, navigate }, thunkApi) => {
  try {
    signIn({
      token: 'test_token'
    })
    navigate(ROUTE_PATHS.dashboard, {
      replace: true
    })
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})

/**
 * Admin Logout Thunk
 */
export const adminLogout = createAsyncThunk('admin/logout', async ({ navigate }, thunkApi) => {
  try {
    signOut()
    navigate(ROUTE_PATHS.login, {
      replace: true
    })
    // const res = await logoutService()
    // return res
  } catch (error) {
    return thunkApi.rejectWithValue(error)
  }
})
