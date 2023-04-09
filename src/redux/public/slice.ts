import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "../../API/PublicDataTypes";

export interface initialStateType {
  currency: currencyType[];
  isRequestReady: boolean;
  isAppLoading: boolean
}

const initialState: initialStateType = {
  currency: [],
  isRequestReady: true,
  isAppLoading: true
};

export const publicDataSlice = createSlice({
  name: "publicData",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<currencyType[]>) => {
      state.currency = action.payload;
    },
    setIsRequestReady: (state, action:PayloadAction<boolean>) => {
      state.isRequestReady = action.payload;
    },
    SetIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload
    }
  }
});

export default publicDataSlice.reducer;
export const { setCurrency, setIsRequestReady, SetIsAppLoading } = publicDataSlice.actions;
