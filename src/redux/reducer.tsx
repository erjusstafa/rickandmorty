import { combineReducers } from "@reduxjs/toolkit";
import homeReducer from "./features/homeSlice"
const rootReducer = combineReducers({
    home  : homeReducer
});

export default rootReducer;