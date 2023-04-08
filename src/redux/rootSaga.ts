import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import publicDataSagas from './persists/saga';
import personDataSagas from "./client/saga";

export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork([publicDataSagas, personDataSagas])]);
}
