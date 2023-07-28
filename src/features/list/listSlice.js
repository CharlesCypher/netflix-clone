import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addToList: (state, action) => {
      const item = state.movies.find((movie) => movie.id === action.payload.id);
      if (item) {
        return;
      } else {
        state.movies.push(action.payload);
      }
    },
    removeFromList: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
    },
    emptyList: (state) => {
      state.movies = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToList, removeFromList, emptyList } = listSlice.actions;

export default listSlice.reducer;
