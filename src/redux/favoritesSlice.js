import { createSlice } from "@reduxjs/toolkit";

const FAVORITES = "favorites";

const favorites = localStorage.getItem(FAVORITES);

const initialState = {
  list: favorites ? JSON.parse(favorites) : [],
};

const favoritesSlice = createSlice({
  name: FAVORITES,
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const favorites = [...state.list, action.payload];

      localStorage.setItem(FAVORITES, JSON.stringify(favorites));
      state.list = favorites;
    },
    removeFromFavoritesById: (state, action) => {
      const favorites = state.list.filter(
        (article) => article.id !== action.payload
      );

      localStorage.setItem(FAVORITES, JSON.stringify(favorites));
      state.list = favorites;
    },
    clearFavorites: (state) => {
      state.list = [];
    },
  },
});

export const { addToFavorites, removeFromFavoritesById, clearFavorites } =
  favoritesSlice.actions;

export default favoritesSlice.reducer;
