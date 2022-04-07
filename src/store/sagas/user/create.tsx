import {takeLatest, call, put} from 'redux-saga/effects';
import {Types, Creators} from '~store/reducers';
// import * as Modal from '~services/modal';
import React from 'react';
import axios from '~services/axios';
// import {Default} from '~modals';
import {ActionType} from 'typesafe-actions';

function* PostUser(props) {
  const {data: response} = yield call(
    axios.post,
    '/Autenticar/NovoUsuario',
    props,
  );

  if (response.error) {
    throw new Error(response.error);
  }

  return yield response;
}

type ICreateUserSaga = ActionType<typeof Creators.user.create.request>;

function* PostUserSaga({payload: {data}}: ICreateUserSaga) {
  try {
    const response = yield PostUser(data);
    // Modal.show(() => <Default title="!" description={response.Mensagem} />);
    const Login = {
      email: data.Email,
      password: data.Senha,
    };
    yield put(
      Creators.login.request({
        provider: 'email',
        data: Login,
      }),
    );
  } catch (err) {
    // if (err.message.includes('cadastrado') && data.provider) {
    //   yield put(Creators.user.create.success({response: undefined}));
    //   return yield put(Creators.login.request({provider: 'email', data}));
    // }
    // Modal.show(() => <Default title="Oops!" description={err.message} />);
    yield put(Creators.login.failure({error: err.message}));
    yield put(Creators.user.create.failure({error: err.message}));
  }
}

export default takeLatest(Types.POST_USER, PostUserSaga);
