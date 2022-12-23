import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json"

const initialState ={
    data
}

const dataSlice = createSlice({
    name:"data",
    initialState,

})

export default dataSlice.reducer