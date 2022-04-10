import React from 'react';
import {takeLatest, put} from 'redux-saga/effects';
import {Types, Creators} from '~store/reducers';
import {Email} from './providers';
import {ActionType} from 'typesafe-actions';
import * as Modal from '~services/modal';
import {Default} from '~modals';

type ILoginSaga = ActionType<typeof Creators.login.request>;

function* Login(data) {
  if (!data) {
    yield put(Creators.user.get.failure({error: 'Login ou senha incorretos'}));
    yield put(Creators.login.success({response: {}}));
    return Modal.show(() => (
      <Default
        cancel={false}
        title="❌"
        description="Login ou senha incorretos!!"
      />
    ));
  } else {
    yield put(Creators.user.get.success({response: data}));
  }
}

function* LoginSaga({payload: {data}}: ILoginSaga) {
  try {
    yield Login(yield Email(data));
  } catch (err) {
    yield put(Creators.login.failure({error: err.message}));
  }
}

export default takeLatest(Types.LOGIN, LoginSaga);
