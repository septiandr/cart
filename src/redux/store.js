import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import totalSlice from "./totalSlice";
export const store = configureStore({
    reducer:{
        dataSlice,
        totalSlice
    }
})