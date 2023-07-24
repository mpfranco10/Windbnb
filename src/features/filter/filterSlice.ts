import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    location: "",
    numberOfGuests: 0,
  },
  reducers: {},
});

export default filterSlice.reducer;
