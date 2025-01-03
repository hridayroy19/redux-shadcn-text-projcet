
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    count : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment : (state, action)=>{
        state.count = state.count + action.payload
    },
    decrement : (state) =>{
      state.count = state.count - 1
    }
  }
})


// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer