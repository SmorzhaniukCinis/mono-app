import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "../../API/PublicDataTypes";

export interface initialStateType {
  currency: currencyType[]
  isRequestReady: boolean
}

const initialState: initialStateType = {
  currency: [],
  isRequestReady: true
};

export const publicDataSlice = createSlice({
  name: "publicData",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<currencyType[]>) => {
      state.currency = action.payload;
    },
    setIsRequestReady: (state) => {
      state.isRequestReady = !state.isRequestReady
    }
  }
});

export default publicDataSlice.reducer;
export const {setCurrency, setIsRequestReady} = publicDataSlice.actions;
