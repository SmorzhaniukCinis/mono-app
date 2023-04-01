import currencyReducer from "./counter/slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer =  combineReducers({
  publicData: currencyReducer,
})

export default rootReducer;
