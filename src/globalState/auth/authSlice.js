import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  fetchAuthUserReducer,
  logOutUserReducer,
  refreshUserReducer,
  fulfilledReduser,
  pendingReduser,
  rejectedReduser,
} from './authExtraReducers';

const extraActions = [register, logIn, refreshUser];

const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);

const initialStateAuth = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresing: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, logOutUserReducer)
      .addCase(refreshUser.fulfilled, refreshUserReducer)
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        fetchAuthUserReducer
      )
      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), fulfilledReduser)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), pendingReduser)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), rejectedReduser),
});

export const authReducer = authSlice.reducer;
