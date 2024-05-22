import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        itemsList:[],
        totalQuantity:0,
        showCart:false,
        changed:false,
    },
    reducers:{
        replaceData(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.itemsList = action.payload.itemsList;
        },
        addToCart(state, action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item)=>item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            // If same item not in cart add as new one
            else{
                state.itemsList.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.name
                })
            }
            state.changed = true;
            state.totalQuantity++;
        },

        removeFromCart(state,action){
            const id = action.payload;
            const existingItem = state.itemsList.find((item)=>item.id === id);
            state.changed = true;
            if(existingItem.quantity === 1){
                state.itemsList = state.itemsList.find((item)=>item.id!==id);
                state.totalQuantity--;
            }
            else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },

        setShowCart(state){
            state.showCart = !state.showCart;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;