import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchOneProduct = createAsyncThunk(
    'slice/fetchOneProduct',
    async function (id: string, { rejectWithValue }) {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}/`)
            if (!response.ok) {
                throw new Error('ашыбка в апи два')
            }
            const data = await response.json()
            return data
        }

        catch (error) {
            return rejectWithValue((error as Error).message)
        }
    }
)


export const onePostSlice = createSlice({
    name: 'onePost',
    initialState: {
        status: null,
        error: null,
        oneProduct: [],
        cartItems: [],
    },
    reducers: {
        addToCart(state: any, { payload }: { payload: any }) {
            state.cartItems.push(payload)
        },


        clearCartAction(state: any, { payload }: { payload: any }) {
            state.cartItems = state.cartItems.filter((item: any) => item.id !== payload.id);
        },

        clearAllCartAction(state) {
            state.cartItems = [];
        }
        
        
    },
    extraReducers: (builder) => {
        //oneProduct
        builder.addCase(fetchOneProduct.fulfilled, (state: any, { payload }: { payload: any }) => {
            state.status = "resolved";
            state.error = null;
            state.oneProduct = payload
        })

        builder.addCase(fetchOneProduct.rejected, (state: any, { payload }: { payload: any }) => {
            state.status = "rejected";
            state.error = payload;
        })

        builder.addCase(fetchOneProduct.pending, (state: any) => {
            state.status = "loading";
            state.error = null;
        })

    }
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { addToCart, clearCartAction, clearAllCartAction} = onePostSlice.actions

export default onePostSlice.reducer