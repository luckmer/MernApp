import { createSlice } from '@reduxjs/toolkit';

const DataSlice = createSlice({
    name: "data",
    initialState: {
        todoData: [],
    },
    reducers: {
        displayData: (state, { payload }) =>{
            state.todoData = payload
        }
    }
});

export const { displayData } = DataSlice.actions;
export const ShippingView = state => state.data.todoData
export default DataSlice.reducer;