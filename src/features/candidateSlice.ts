import axios, { AxiosResponse } from "axios";

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { Candidate, CandidateState, } from '../common/interfaces';
import { QueryTypes } from '../common/types';
import { sortBy, filterBy } from '../utils/methods';


const initialState: CandidateState = {
    loading: true,
    unfilteredCandidates: [],
    candidates: [],
};

export const fetchCandidates = createAsyncThunk("getCandidates", async (query: any, { rejectWithValue }) => {
    let res: any = await axios.get("https://my.api.mockaroo.com/candidates.json?key=64075fa0")
        .then((response) => ({ query: query, data: response.data }))
        .catch((error) => rejectWithValue(error.message))
    return res
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
        builder.addCase(fetchCandidates.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.error = action.payload
        });
    },
});

export const { filterCandidates, sortCandidates } = candidateSlice.actions
export default candidateSlice.reducer;

