import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import favoritesReducer from "./favoritesSlice";

export default configureStore({
  reducer: {
    search: searchReducer,
    favorites: favoritesReducer,
  },
});
