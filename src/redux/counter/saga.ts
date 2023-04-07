import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { PublicDataAPI } from "../../API/PublicDataAPI";
import { setCurrency, setIsRequestReady } from "./slice";
import { currencyType, FETCH_CURRENCY } from "../../API/PublicDataTypes";

export function* fetchCurrency(): any {
  yield put(setIsRequestReady())
  const currency: currencyType[] = yield call(PublicDataAPI.getCurrency);
  yield put(setCurrency(currency))
  yield setTimeout(() => {
    put(setIsRequestReady())
  }, 10000)
}

export function* watchPublicDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(FETCH_CURRENCY, fetchCurrency);

}

export const publicDataAction = {
  getCurrency: () => ({ type: FETCH_CURRENCY })
};

const publicDataSagas = watchPublicDataSagas;

export default publicDataSagas;
