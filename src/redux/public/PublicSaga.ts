import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { PublicDataAPI } from "../../API/PublicDataAPI";
import { setCurrency, SetIsAppLoading, setIsRequestReady } from "./PublicSlice";
import { currencyType } from "../../API/PublicDataTypes";

export function* fetchCurrency(): any {
  try {
    yield put(SetIsAppLoading(true));
    yield put(setIsRequestReady(false));
    const currency: currencyType[] = yield call(PublicDataAPI.getCurrency);
    yield put(setCurrency(currency));
  }
  finally {
    yield put(SetIsAppLoading(false))
  }
  }


export const publicDataAction = {
  getCurrency: () => ({ type: FETCH_CURRENCY })
};


export function* watchPublicDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(FETCH_CURRENCY, fetchCurrency);

}

const publicDataSagas = watchPublicDataSagas;

const FETCH_CURRENCY = "FETCH_CURRENCY";

export default publicDataSagas;
