import axios from "axios";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { Candidate, CandidateState, } from '../common/interfaces';
import { QueryTypes } from '../common/types';
import { sortBy, filterBy } from '../utils/methods';


const initialState: CandidateState = {
    loading: true,
    error: false,
    unfilteredCandidates: [],
    candidates: [],
};

export const fetchCandidates = createAsyncThunk("getCandidates", async (query: any, { rejectWithValue }) => {
    let res = await axios.get("https://sumit-back-end-env.herokuapp.com/api/v1/candidates")
    if (res.data.data.data === undefined) return rejectWithValue(true)
    return ({ query: query, data: res.data.data.data });
});

const candidateSlice = createSlice({
    name: "candidates",
    initialState,
    reducers: {
        sortCandidates: (state, action: PayloadAction<QueryTypes>) => {
            let { sortBy: key, asc } = action.payload
            state.candidates = sortBy(state.candidates, key, asc)
        },
        filterCandidates: (state, action: PayloadAction<QueryTypes>) => {
            let { sortBy, asc, ...filters } = action.payload
            state.candidates = filterBy(state.unfilteredCandidates, filters)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCandidates.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchCandidates.fulfilled, (state, action: PayloadAction<{ query: any, data: Candidate[] }>) => {
            let { sortBy: sortKey, asc, ...filters } = action.payload.query
            let filteredData = filterBy(action.payload.data, filters)
            let sortedData = sortBy(filteredData, sortKey, asc)

            state.unfilteredCandidates = action.payload.data
            state.candidates = sortedData
            state.loading = false
        })
        builder.addCase(fetchCandidates.rejected, (state) => {
            state.loading = false
            state.error = true
        });
    },
});

export const { filterCandidates, sortCandidates } = candidateSlice.actions
export default candidateSlice.reducer;

