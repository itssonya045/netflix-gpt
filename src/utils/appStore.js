import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/UserSlice";
import MovieReducer from "../utils/MovieSlice";
import gptReducer from "../utils/GptSlice";
import ConfigReducer from "../utils/ConfigSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies : MovieReducer,
    gpt : gptReducer,
    config : ConfigReducer
  },
});

export default appStore;
