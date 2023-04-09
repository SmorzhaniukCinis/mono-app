import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import publicDataSagas from './public/saga';
import personDataSagas from "./client/saga";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(personDataSagas), fork(publicDataSagas) ]);
}
