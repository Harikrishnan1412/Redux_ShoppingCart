import { configureStore } from "@reduxjs/toolkit";
import  authSlice  from "./auth-Slice";
import cartSlice from "./cart-Slice";
import uiSlice from "./ui-Slice";

// Creating store using configureStore
// Call authSlice and pass it in reducer
// Never use fetch or Syncronize code in slice
// Use in useEfect component
const store = configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cartSlice.reducer,
        ui:uiSlice.reducer
    },
});
export default store;