import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientInfoType, transactionType } from "../../API/PersonDataTypes";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { publicDataSlice } from "../public/PublicSlice";

export interface initialStateType {
  clientInfo: clientInfoType | null
  token: string
  isClientInfoReady: boolean
  isTransactionsReady: boolean
  transactions: transactionType[]
}

const initialState: initialStateType = {
  clientInfo: null,
  token: '',
  isClientInfoReady: true,
  isTransactionsReady: true,
  transactions: []
};

export const personDataSlice = createSlice({
  name: "personData",
  initialState,
  reducers: {
    setClientInfo: (state, action: PayloadAction<clientInfoType | null>) => {
      state.clientInfo = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setIsClientInfoReady: (state, action: PayloadAction<boolean>) => {
      state.isClientInfoReady =  action.payload
    },
    setIsTransactionsReady: (state, action: PayloadAction<boolean>) => {
      state.isTransactionsReady =  action.payload
    },
    setTransactions: (state, action: PayloadAction<transactionType[]>) => {
      state.transactions =  action.payload
    }
  }
});

const persistConfig = {
  key: 'client',
  storage,
  whitelist: ['clientInfo', 'token', 'transaction']
};

persistReducer(persistConfig, publicDataSlice.reducer);

export default persistReducer(persistConfig, personDataSlice.reducer);
export const {setClientInfo, setToken, setIsClientInfoReady, setIsTransactionsReady, setTransactions} = personDataSlice.actions;
