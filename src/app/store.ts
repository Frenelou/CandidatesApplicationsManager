import { configureStore } from "@reduxjs/toolkit"
import candidateReducer from '../features/candidateSlice'
import queryReducer from '../features/querySlice'

export const store = configureStore({
    reducer: {
        candidates: candidateReducer,
        query: queryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
