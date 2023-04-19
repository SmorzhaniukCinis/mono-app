import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { currencyType } from "../../API/PublicDataTypes";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export interface initialStateType {
  currency: currencyType[];
  isRequestReady: boolean;
  isAppLoading: boolean;
  errorMessages: string[];
}

const initialState: initialStateType = {
  currency: [],
  isRequestReady: true,
  isAppLoading: false,
  errorMessages: []
};

export const publicDataSlice = createSlice({
  name: "publicData",
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<currencyType[]>) => {
      state.currency = action.payload;
    },
    setIsRequestReady: (state, action: PayloadAction<boolean>) => {
      state.isRequestReady = action.payload;
    },
    SetIsAppLoading: (state, action: PayloadAction<boolean>) => {
      state.isAppLoading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessages.push(action.payload);
    },
    cleanErrorMessage: (state, action: PayloadAction<string>) => {
      const index = state.errorMessages.indexOf(action.payload);
      state.errorMessages.splice(index, 1);
    }
  }
});

const persistConfig = {
  key: "public",
  storage,
  whitelist: ["currency"]
};

persistReducer(persistConfig, publicDataSlice.reducer);

export default persistReducer(persistConfig, publicDataSlice.reducer);
export const {
  setCurrency,
  setIsRequestReady,
  SetIsAppLoading,
  setErrorMessage,
  cleanErrorMessage
} = publicDataSlice.actions;
