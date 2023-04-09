import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { setClientInfo, setIsClientInfoReady, setToken } from "./ClientSlice";
import { PersonDataAPI } from "../../API/PersonalDataAPI";
import {
  CHECK_CLIENT_TOKEN,
  checkClientTokenType,
  clientInfoType,
  FETCH_CLIENT_INFO,
  fetchClientInfoType
} from "../../API/PersonDataTypes";
import { setErrorMessage, SetIsAppLoading } from "../public/PublicSlice";

export function* checkClientToken({ token }: checkClientTokenType): any {
  try {
    const clientInfo: clientInfoType = yield call(PersonDataAPI.confirmToken, token);
    if (clientInfo !== null && clientInfo !== undefined) {
      yield put(setClientInfo(clientInfo));
      yield put(setToken(token));
    }
  }
  catch (e: any) {
    if (e.response.status === 403) {
      yield put(setErrorMessage('Wops... looks like token is invalid'))
    }else if (e.response.status === 429) (
      yield put(setErrorMessage('Ty many tries... try agan later'))
    )
  }
}

export function* fetchClientInfo(): any {
  yield put(setIsClientInfoReady(false))
  yield put(SetIsAppLoading(true))
  const clientInfo: clientInfoType = yield call(PersonDataAPI.getClientInfo);
  yield put(setClientInfo(clientInfo));
  yield put(SetIsAppLoading(false))
  yield setTimeout(()=> {
    put(setIsClientInfoReady(true))
  }, 10000)
}

export const personDataAction = {
  checkClientToken: (token: string): checkClientTokenType => ({ type: CHECK_CLIENT_TOKEN, token }),
  fetchClientInfo: (): fetchClientInfoType => ({ type: FETCH_CLIENT_INFO })
};


export function* watchPersonDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(CHECK_CLIENT_TOKEN, checkClientToken);
  yield takeEvery(FETCH_CLIENT_INFO, fetchClientInfo);
}


const personDataSagas = watchPersonDataSagas;


export default personDataSagas;
