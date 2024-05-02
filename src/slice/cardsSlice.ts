import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk(
    'slice/fetchData',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            if (!response.ok) {
                throw new Error('ашыбка в апи')
            }
            const data = await response.json()
            return data
        }
        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    status: null,
    error: null,
    data: [],
    searchResults: [],
  },
  reducers: {
    setSearchResults(state, { payload }) {
        state.searchResults = payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state: any, { payload }: { payload: any }) => {
        state.status = "resolved";
        state.error = null;
        state.data = payload
    })

    builder.addCase(fetchData.rejected, (state: any, { payload }: { payload: any }) => {
        state.status = "rejected";
        state.error = payload;
    })

    builder.addCase(fetchData.pending, (state: any) => {
        state.status = "loading";
        state.error = null;
    })

}
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const {setSearchResults} = counterSlice.actions

export default counterSlice.reducer