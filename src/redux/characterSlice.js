import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: {},
  value: 0,
  error: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.isLoading = true;
      state.token = action.payload;
      state.isLoading = false;
    },
  },
});

export const { addToken } = charactersSlice.actions;
export default charactersSlice.reducer;
