import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'

const data = {
    name:'Dinesh',
    age:20
}

const slice=createSlice({
    name:'sdafsa',
    data,
    reducers:{
        changeName(state, action){
            state.name = action.payload
        },
        changeAge(state, action){
            state.age = action.payload
        },
    }
})


export const store = configureStore({
    preloadedState:data,
    reducer: slice.reducer
})

export const {changeName, changeAge} = slice.actions