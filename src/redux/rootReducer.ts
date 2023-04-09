import currencyReducer from "./public/PublicSlice";
import personReducer from "./client/ClientSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer =  combineReducers({
  publicData: currencyReducer,
  personData: personReducer,
})

export default rootReducer;
