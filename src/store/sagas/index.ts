import {all, take} from 'redux-saga/effects';
import login from './login';
import user from './user';
import logout from './logout';

export default function* rootSaga() {
  // yield take(REHYDRATE); // Wait for store to be fully rehydrate
  yield all([login, logout, ...user]);
}
