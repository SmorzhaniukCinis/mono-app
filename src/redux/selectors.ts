import { RootState } from "./store";
import { clientInfoType } from "../API/PersonDataTypes";
import { currencyType } from "../API/PublicDataTypes";

export const getClientInfoSelector = (state:RootState):clientInfoType | null => state.personData.clientInfo
export const getToken = (state:RootState):string => state.personData.token
export const getIsClientInfoReady = (state:RootState):boolean => state.personData.isClientInfoReady
export const getIsAppLoading = (state:RootState):boolean => state.publicData.isAppLoading
export const getCurrency = (state:RootState): currencyType[] => state.publicData.currency
export const getIsRequestReady = (state:RootState): boolean => state.publicData.isRequestReady
export const getErrorMessages = (state:RootState): string[] => state.publicData.errorMessages