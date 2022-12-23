import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    total :[]
}

const totalSlice = createSlice({
    name:"data",
    initialState,
    reducers:{
        addPrice :(state,actions) =>{
            console.log(actions)
            state.total = [...state.total, actions.payload.total]
        }
    }
})
export const { addPrice } = totalSlice.actions

export default totalSlice.reducer