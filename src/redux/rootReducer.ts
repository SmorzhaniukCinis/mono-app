import currencyReducer from "./public/slice";
import personReducer from "./client/slice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer =  combineReducers({
  publicData: currencyReducer,
  personData: personReducer,
})

export default rootReducer;
