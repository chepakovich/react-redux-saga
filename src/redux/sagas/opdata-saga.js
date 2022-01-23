import { put, call, takeEvery } from 'redux-saga/effects';
import {
  SET_LOADING,
  GET_OPERATORS,
  GET_OPERATORS_REQUESTED,
  GET_COMPANIES,
  GET_COMPANIES_REQUESTED,
  GET_INSTRUMENTS,
  GET_INSTRUMENTS_REQUESTED,
  GET_RUNS,
  GET_RUNS_REQUESTED,
} from '../actions/opdata-actions';
import {
  getOperators,
  getCompanies,
  getInstruments,
  getRuns,
} from '../api/opdata-api';

function* getAllOperators() {
  yield put({ type: SET_LOADING });
  const operators = yield call(getOperators);
  yield put({ type: GET_OPERATORS, payload: operators });
}

function* getAllCompanies() {
  yield put({ type: SET_LOADING });
  const companies = yield call(getCompanies);
  yield put({ type: GET_COMPANIES, payload: companies });
}

function* getAllInstruments() {
  yield put({ type: SET_LOADING });
  const instruments = yield call(getInstruments);
  yield put({ type: GET_INSTRUMENTS, payload: instruments });
}

function* getAllRuns() {
  yield put({ type: SET_LOADING });
  const runs = yield call(getRuns);
  yield put({ type: GET_RUNS, payload: runs });
}

export default function* opdataSaga() {
  yield takeEvery(GET_OPERATORS_REQUESTED, getAllOperators);
  yield takeEvery(GET_COMPANIES_REQUESTED, getAllCompanies);
  yield takeEvery(GET_INSTRUMENTS_REQUESTED, getAllInstruments);
  yield takeEvery(GET_RUNS_REQUESTED, getAllRuns);
}
