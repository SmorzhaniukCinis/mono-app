import currencyReducer from "./persists/persistSlice";
import personReducer from "./client/slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer =  combineReducers({
  persistData: currencyReducer,
  personData: personReducer,
})

export default rootReducer;
