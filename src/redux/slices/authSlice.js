import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: Boolean(window.localStorage.getItem("AUTHENTICATED")),
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      window.localStorage.setItem("AUTHENTICATED", false);
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
      window.localStorage.setItem("AUTHENTICATED", action.payload);
    },
  },
});
export const getUser = (state) => state.auth.user;
export const { setUser, setAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
