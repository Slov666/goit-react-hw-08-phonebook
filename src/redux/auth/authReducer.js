import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./authActions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginSuccess]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [authActions.loginSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.logoutRequest]: () => true,

  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.registerRequest]: () => true,

  [authActions.logoutSuccess]: () => false,
  [authActions.logoutError]: () => false,
  [authActions.logoutRequest]: () => true,

  [authActions.getCurrentUserSuccess]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,
});

export default combineReducers({
  user,
  error,
  token,
  loading,
});
