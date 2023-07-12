import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import selectedUserReducer from './selectedUserSlice';
import activeUsersReducer from './activeUsersSlice';

export const store = configureStore({
  reducer: {
    loginInfo: loginReducer,
    selectedUser: selectedUserReducer,
    activeUsers: activeUsersReducer
  },
})