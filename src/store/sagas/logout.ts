import {Creators, Types} from '~store/reducers';
import {put, takeLatest, call} from 'redux-saga/effects';
import axios from '~services/axios';

function* LogoutSaga() {
  try {
    yield put(Creators.logout.success({}));
  } catch (err) {
    yield put(Creators.logout.failure({}));
  }
}

export default takeLatest(Types.LOGOUT, LogoutSaga);
