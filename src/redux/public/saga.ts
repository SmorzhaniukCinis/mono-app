import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { PublicDataAPI } from "../../API/PublicDataAPI";
import { setCurrency, setIsRequestReady } from "./slice";
import { currencyType } from "../../API/PublicDataTypes";

export function* fetchCurrency(): any {
  yield put(setIsRequestReady(false))
  const currency: currencyType[] = yield call(PublicDataAPI.getCurrency);
  yield put(setCurrency(currency))

  yield setTimeout(() => {
    put(setIsRequestReady(true))
  }, 10000)
}

export const publicDataAction = {
  getCurrency: () => ({ type: FETCH_CURRENCY }),
};


export function* watchPublicDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(FETCH_CURRENCY, fetchCurrency);

}

const publicDataSagas = watchPublicDataSagas;

const FETCH_CURRENCY = 'FETCH_CURRENCY_1'

export default publicDataSagas;
