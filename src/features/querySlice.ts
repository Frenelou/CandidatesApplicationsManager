import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Query } from '../common/interfaces';

const initialState: any = {
    query: {
        name: "",
        position_applied: "",
        status: "",
        asc: true,
        sortBy: "name"
    }
};

const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<Query>) => {
            state.query = { ...action.payload }
        },
    },
});

export const { setQuery } = querySlice.actions
export default querySlice.reducer;

