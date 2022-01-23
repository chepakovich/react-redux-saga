import { spawn } from 'redux-saga/effects';
import opdataSaga from './opdata-saga';

export default function* rootSaga() {
  yield spawn(opdataSaga);
}
