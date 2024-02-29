// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import mapReducer from "./slices/mapSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  map: mapReducer,
  // Add other reducers as needed
});

export default rootReducer;
