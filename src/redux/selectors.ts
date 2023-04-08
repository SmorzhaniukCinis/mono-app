import { RootState } from "./store";
import { clientInfoType } from "../API/PersonDataTypes";

export const getClientInfoSelector = (state:RootState):clientInfoType | null => state.personData.clientInfo
export const getToken = (state:RootState):string => state.persistData.token