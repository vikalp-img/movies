import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slice/MovieSlice";


export const store = configureStore({
    reducer:reducer
});