import { takeLatest, throttle } from "redux-saga";
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from '../actions'

function* increment() {
  yield delay(1000);
  yield put(actions.testIncrement());
}

function* decrement() {
  yield delay(1000);
  yield put(actions.testDecrement());
}

function* taskIncrement() {
  yield* throttle(1000, actions.TEST_INCREMENT, increment);
}

function* taskDecrement() {
  yield* throttle(1000*2, actions.TEST_DECREMENT, decrement);
}

function* watch() {
  while (true) {
    yield take(actions.TEST_INCREMENT)
    console.log('test!');
  }
}

export function* testRoot() {
  // yield fork(taskIncrement);
  // yield fork(taskDecrement);
  yield fork(watch);
}
