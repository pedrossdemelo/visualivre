import { createSlice } from "@reduxjs/toolkit";

const menuOpen = createSlice({
  name: "menuOpen",
  initialState: true,
  reducers: {
    toggleMenu: state => !state,
  },
});

export const { toggleMenu } = menuOpen.actions;
export const menuOpenReducer = menuOpen.reducer;
