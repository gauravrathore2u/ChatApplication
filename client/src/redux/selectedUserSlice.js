import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  email_verified: false,
  name: "",
  picture: "",
};

export const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.email = action.payload.email;
      state.email_verified = action.payload.email_verified;
      state.name = action.payload.name;
      state.picture = action.payload.picture;
    },
  },
});

export const { setSelectedUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
