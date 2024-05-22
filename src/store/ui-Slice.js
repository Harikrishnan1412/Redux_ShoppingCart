import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { notification: null },
    reducers: {
        
        showNotification(state, action) {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open
            }
        }
    }
})

// Using thunk(action creator) in call fetch method 
// Dispatch is also thunk 

export const uiActions = uiSlice.actions;
export default uiSlice;