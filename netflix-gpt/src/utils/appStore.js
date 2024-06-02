import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptRedecuer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies:moviesReducer,
    gpt: gptRedecuer,
    config:configReducer
  },
});

export default appStore;
