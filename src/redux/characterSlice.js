import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: [],
  info: {},
  value: 0,
  error: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    startCall: (state) => {
      state.isLoading = true;
    },
    addData: (state, action) => {
      state.data = action.payload;
      state.info = action.payload;
    },
    addInfo: (state, action) => {
      state.info = action.payload;
    },
    endCall: (state) => {
      state.isLoading = false;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { startCall, addData, addInfo, endCall, setError } =
  charactersSlice.actions;
export default charactersSlice.reducer;
