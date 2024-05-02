import { createSlice, current, createAsyncThunk } from '@reduxjs/toolkit'
import { ILogIn } from '../types/interface'

export const fetchLogIn = createAsyncThunk(
    'slice/fetchLogIn',
    async function (obj:ILogIn, { rejectWithValue }) {
        try {
            const response = await fetch(`https://fakestoreapi.com/auth/login`,
                {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: { 'Content-type': 'application/json; charset=UTF-8' }
                })
            if (!response.ok) {
                throw new Error('ашыбка в ауф юзер')
            }
            const data = await response.json()
            return data
        }

        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)


export const logIn = createSlice({
    name: 'logIn',
    initialState: {
        status: null,
        error: null,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        //authUser
        builder.addCase(fetchLogIn.fulfilled, (state: any, { payload }: { payload: any }) => {
            state.status = "resolved";
            state.error = null;
            console.log(payload)
        })

        builder.addCase(fetchLogIn.rejected, (state: any, { payload }: { payload: any }) => {
            state.status = "rejected";
            state.error = payload;
        })

        builder.addCase(fetchLogIn.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        })
    }
});

export const { } = logIn.actions

export default logIn.reducer