import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name:"gpt",
    initialState : {
        showGPT : false
    },
    reducers:{
        toggleGptSearch :(state)=>{
            state.showGPT = !state.showGPT
        }
    }
})

export const {toggleGptSearch} = gptSlice.actions;
export default gptSlice.reducer;