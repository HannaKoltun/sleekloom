import { createSlice, current} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'count',
    initialState: {
        value: 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 1) {
                state.value -= 1;
              }
        },
    },
});


export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
