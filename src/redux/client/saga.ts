import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { setClientInfo } from "./slice";
import { PersonDataAPI } from "../../API/PersonalData";
import { clientInfoType, FETCH_CLIENT_INFO, fetchClientInfoType } from "../../API/PersonDataTypes";
import { setToken } from "../persists/persistSlice";

export function* fetchClientInfo({token}:fetchClientInfoType): any {
  const clientInfo: clientInfoType = yield call(PersonDataAPI.getClientInfo, token);
  if (clientInfo !== null && clientInfo !== undefined) {
    yield put(setClientInfo(clientInfo))
    yield put(setToken(token))
  }

}

export function* watchPersonDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(FETCH_CLIENT_INFO, fetchClientInfo);

}

export const personDataAction = {
  getClientInfo: (token: string):fetchClientInfoType =>{
    return { type: FETCH_CLIENT_INFO, token }
  }
};

const personDataSagas = watchPersonDataSagas;



export default personDataSagas;
