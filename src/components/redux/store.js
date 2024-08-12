import { configureStore } from "@reduxjs/toolkit";

import countSlice from "./countSlice";
import countReducer from './countSlice'
// import userReducer
// import studentSlice
// import listSlice
import productSlice from './productSlice'
import cartSlice from "./cartSlice";
import catSlice from "./catSlice";
const store = configureStore({
    reducer: {
        count: countReducer,
        // user: userReducer,
        // student: studentSlice,
        // students: listSlice,
        products: productSlice,
        cart: cartSlice,
        cats: catSlice
      }
})

export default store

// xong roi qua index them
    // <Provider store={store}>
    //   <App />
    // </Provider>