import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import publicDataSagas from './public/PublicSaga';
import personDataSagas from "./client/ClientSaga";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(personDataSagas), fork(publicDataSagas) ]);
}
