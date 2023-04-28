import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { setClientInfo, setIsClientInfoReady, setIsTransactionsReady, setToken, setTransactions } from "./ClientSlice";
import { PersonDataAPI } from "../../API/PersonalDataAPI";
import {
  CHECK_CLIENT_TOKEN,
  checkClientTokenType,
  clientInfoType,
  FETCH_CLIENT_INFO, FETCH_TRANSACTIONS,
  fetchClientInfoType, fetchTransactionsType, transactionType
} from "../../API/PersonDataTypes";
import { setErrorMessage, SetIsAppLoading } from "../public/PublicSlice";

export function* checkClientToken({ token }: checkClientTokenType): any {
  try {
    yield put(SetIsAppLoading(true));
    const clientInfo: clientInfoType = yield call(PersonDataAPI.confirmToken, token);
    if (clientInfo !== null && clientInfo !== undefined) {
      yield put(setClientInfo(clientInfo));
      yield put(setToken(token));
    }
  } catch (e: any) {
    if (e.response.status === 403) {
      yield put(setErrorMessage("Wops... looks like token is invalid"));
    } else if (e.response.status === 429) {
      yield put(setErrorMessage("Ty many tries... try agan later"));
    } else {
      yield put(setErrorMessage(e.response.data.errorDescription));
    }
  } finally {
    yield put(SetIsAppLoading(false));
  }
}

export function* fetchClientInfo(): any {
  try {
    yield put(setIsClientInfoReady(false));
    yield put(SetIsAppLoading(true));
    const clientInfo: clientInfoType = yield call(PersonDataAPI.getClientInfo)
    yield put(setClientInfo(clientInfo));
  } finally {
    yield put(SetIsAppLoading(false));
  }
}

export function* fetchTransaction({ account, to, from }: fetchTransactionsType): any {
  try {
    yield put(setIsTransactionsReady(false));
    yield put(SetIsAppLoading(true));
    const transactions: transactionType[] = yield call(PersonDataAPI.getTransaction, account, from, to)
    yield put(setTransactions(transactions));
  } finally {
    yield put(SetIsAppLoading(false));
  }
}

export const personDataAction = {
  checkClientToken: (token: string): checkClientTokenType => ({ type: CHECK_CLIENT_TOKEN, token }),
  fetchClientInfo: (): fetchClientInfoType => ({ type: FETCH_CLIENT_INFO }),
  fetchTransactions: (account: string, from: string, to?: string ): fetchTransactionsType => ({
    type: FETCH_TRANSACTIONS,
    account,
    from,
    to
  })
};


export function* watchPersonDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(CHECK_CLIENT_TOKEN, checkClientToken);
  yield takeEvery(FETCH_CLIENT_INFO, fetchClientInfo);
  yield takeEvery(FETCH_TRANSACTIONS, fetchTransaction);
}


const personDataSagas = watchPersonDataSagas;


export default personDataSagas;
