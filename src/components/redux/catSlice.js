import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    cats: [],
    currentPage:1,
    status: "start",
    error: "", 
    //
    totalPage: 30,

};
const url = "https://66a07be77053166bcabb8fcc.mockapi.io/student"
// export const fetchCats = createAsyncThunk('cats/fetchCats', async () => {
//     const response = await axios.get(url);
//     return response.data;
// })
export const fetchCats = createAsyncThunk('cats/fetchCats', async (page) => {
    const response = await axios.get(`${url}?page=${page}&&limit=5`);
    return response.data;
})
export const deleteCat = createAsyncThunk('cats/deleteCat',async(id) => {
    await axios.delete(url+"/"+id)
    return id
})
export const addNewCat = createAsyncThunk('cats/addNewCat',async(cat) => {
    const response = await axios.post(url,cat);
    return response.data
})
export const reCheckCat = createAsyncThunk('cats/reCheckCat',async(cat) => {
    const response = await axios.put(url+"/"+cat.id,{...cat,checked:!cat.checked});
    return response.data
})
const catsSlice = createSlice({
    name: 'cats',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCats.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCats.fulfilled, (state,action) => {
            state.status = 'succeeded';
            state.cats = action.payload
        })
        .addCase(fetchCats.rejected, (state,action) => {
            state.status = 'failed';
            state.error = action.error.message
        })

        .addCase(addNewCat.fulfilled, (state,action) => {
            state.cats = [...state.cats, action.payload]
        })
        .addCase(deleteCat.fulfilled, (state,action) => {
            
            state.cats = state.cats.filter(item => item.id !== action.payload)
        })
        .addCase(reCheckCat.fulfilled, (state,action) => {
            state.cats = state.cats.map(item => item.id === action.payload.id?{...item, checked:!item.checked}:item)
        })

    }
})

export default catsSlice.reducer