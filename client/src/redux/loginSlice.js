import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    email_verified: false,
    name: "",
    picture: ""


}

export const loginSlice = createSlice({
  name: 'loginInfo',
  initialState,
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      state.email_verified = action.payload.email_verified;
      state.name = action.payload.name;
      state.picture = action.payload.picture;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = loginSlice.actions

export default loginSlice.reducer