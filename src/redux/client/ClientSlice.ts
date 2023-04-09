import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientInfoType } from "../../API/PersonDataTypes";

export interface initialStateType {
  clientInfo: clientInfoType | null
  token: string
  isClientInfoReady: boolean
}

const initialState: initialStateType = {
  clientInfo: null,
  token: '',
  isClientInfoReady: true
};

export const personDataSlice = createSlice({
  name: "personData",
  initialState,
  reducers: {
    setClientInfo: (state, action: PayloadAction<clientInfoType>) => {
      state.clientInfo = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setIsClientInfoReady: (state, action: PayloadAction<boolean>) => {
      state.isClientInfoReady =  action.payload
    }
  }
});

export default personDataSlice.reducer;
export const {setClientInfo, setToken, setIsClientInfoReady} = personDataSlice.actions;
