import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clientInfoType } from "../../API/PersonDataTypes";

export interface initialStateType {
  clientInfo: clientInfoType | null
}

const initialState: initialStateType = {
  clientInfo: null,
};

export const personDataSlice = createSlice({
  name: "personData",
  initialState,
  reducers: {
    setClientInfo: (state, action: PayloadAction<clientInfoType>) => {
      state.clientInfo = action.payload;
    },
  }
});

export default personDataSlice.reducer;
export const {setClientInfo} = personDataSlice.actions;
