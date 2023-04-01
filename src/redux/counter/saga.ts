import { call, ForkEffect, put, takeEvery } from "redux-saga/effects";
import { PublicDataAPI } from "../../API/PublicDataAPI";
import { setCurrency } from "./slice";
import { currencyType, FETCH_CURRENCY } from "../../API/PublicDataTypes";

export function* fetchCurrency():any {
  const currency:currencyType[] = yield call(PublicDataAPI.getCurrency)
  yield put(setCurrency(currency));
}
export function* watchPublicDataSagas(): Generator<ForkEffect, void> {
  yield takeEvery(FETCH_CURRENCY, fetchCurrency);

}

export const publicDataAction = {
  getCurrency: () => ({type: FETCH_CURRENCY})
}

const publicDataSagas = watchPublicDataSagas;

export default publicDataSagas;
