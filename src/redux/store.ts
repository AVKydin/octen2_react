import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {counter1Slice} from "../slices/slice1";




export const store = configureStore({
    reducer:{
        slice1: counter1Slice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
