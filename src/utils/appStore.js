import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice";
import MovieReducer from "../utils/MovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies : MovieReducer,
  },
});

export default appStore;
