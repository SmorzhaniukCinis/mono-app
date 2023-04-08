import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "../../API/PublicDataTypes";

export interface initialStateType {
  currency: currencyType[]
  isRequestReady: boolean
  token: string
}

const initialState: initialStateType = {
  currency: [],
  isRequestReady: true,
  token: ''
};

export const persistDataSlice = createSlice({
  name: "persistData",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<currencyType[]>) => {
      state.currency = action.payload;
    },
    setIsRequestReady: (state) => {
      state.isRequestReady = !state.isRequestReady
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload)
    },
  }
});

export default persistDataSlice.reducer;
export const {setCurrency, setIsRequestReady, setToken} = persistDataSlice.actions;
