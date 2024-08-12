import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    items: [],
    status: 'start',
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchproducts', async () => {
    const response = await axios.get('https://66a07be77053166bcabb8fcc.mockapi.io/student');
    return response.data;
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message
        })

    }
})

export default productsSlice.reducer