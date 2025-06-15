import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./items.action";


export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, { add }) => {
        return state + add;
    }),
    on(decrement, (state) => {
        return state - 1;
    }),
    on(reset, (state) => {
        return state = 0;
    })
)