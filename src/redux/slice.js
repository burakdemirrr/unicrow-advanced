import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:""
    },
    reducers: {
      login(state, action) {
        state.user=action.payload
      },
      logout(state, action) {
        state.user=null
      },
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = userSlice
  // Extract and export each action creator by name
  export const { login, logout, } = actions
  // Export the reducer, either as a default or named export
  export default reducer