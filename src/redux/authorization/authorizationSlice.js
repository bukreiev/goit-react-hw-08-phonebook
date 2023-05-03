import { createSlice } from '@reduxjs/toolkit';
import authorizationOperations from './authorizationOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isCreatingUser: false,
  isSigningInUser: false,
};

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  extraReducers: builder => {
    builder.addCase(authorizationOperations.createUser.pending, state => {
      state.isCreatingUser = true;
    });
    builder.addCase(
      authorizationOperations.createUser.fulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isCreatingUser = false;
      }
    );
    builder.addCase(authorizationOperations.createUser.rejected, state => {
      state.isCreatingUser = false;
    });
    builder.addCase(authorizationOperations.loginUser.pending, state => {
      state.isSigningInUser = true;
    });
    builder.addCase(
      authorizationOperations.loginUser.fulfilled,
      (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isSigningInUser = false;
      }
    );
    builder.addCase(authorizationOperations.loginUser.rejected, state => {
      state.isSigningInUser = false;
    });
    builder.addCase(
      authorizationOperations.logoutUser.fulfilled,
      (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }
    );
    builder.addCase(
      authorizationOperations.getCurrentUserInfo.pending,
      state => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addCase(
      authorizationOperations.getCurrentUserInfo.fulfilled,
      (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addCase(
      authorizationOperations.getCurrentUserInfo.rejected,
      state => {
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export default authorizationSlice.reducer;
