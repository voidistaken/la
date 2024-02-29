// mapSlice.js
import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "map",
  initialState: {
    startLocation: null,
    destination: null,
    distance: 0,
    price: 0,
    // Add other map-related state properties here
  },
  reducers: {
    setStartLocation: (state, action) => {
      state.startLocation = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    // Add other map-related actions here
  },
});

export const { setStartLocation, setDestination } = mapSlice.actions;
export default mapSlice.reducer;
