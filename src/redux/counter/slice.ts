import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "../../API/PublicDataTypes";

export interface initialStateType {
  currency: currencyType[];
}

const initialState: initialStateType = {
  currency: []
};

export const publicDataSlice = createSlice({
  name: "publicData",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<currencyType[]>) => {
      state.currency = action.payload;
    }
  }
});

export default publicDataSlice.reducer;
export const {setCurrency} = publicDataSlice.actions;
