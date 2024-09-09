import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  data: [],
  info: {},
  error: false,
  page: 1,
  isSearch: false,
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
      state.data = [];
      state.info = {};
      state.page = 1;
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
    setSearchResult: (state) => {
      state.isSearch = true;
    },
    setRegularResult: (state) => {
      state.isSearch = false;
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
  setSearchResult,
  setRegularResult,
} = charactersSlice.actions;
export default charactersSlice.reducer;
