import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: [],
  info: {},
  value: 0,
  error: false,
  page: 1,
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
    incrementPage: (state, action) => {
      state.page = action.payload;
    },
    decrementPage: (state, action) => {
      state.page = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  startCall,
  addData,
  addInfo,
  endCall,
  setError,
  incrementPage,
  decrementPage,
  setPage,
} = charactersSlice.actions;
export default charactersSlice.reducer;
