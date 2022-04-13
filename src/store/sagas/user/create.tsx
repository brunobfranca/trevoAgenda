import React from 'react';
import {takeLatest, call, put} from 'redux-saga/effects';
import {Types, Creators} from '~store/reducers';
import * as Modal from '~services/modal';
import {Default} from '~modals';
import {ActionType} from 'typesafe-actions';
import database from '@react-native-firebase/database';

function* getProviders(inscricao) {
  const response = database().ref('providers').once('value');
  const data = [];
  const res = yield response;
  res.forEach(r => {
    data.push(r.toJSON());
  });
  let filtro = data.filter(r => r.inscricao === inscricao);
  console.log(filtro);
  return filtro;
}
function* PostUser(props) {
  try {
    props = {...props, id: Math.floor(new Date())};
    const response = yield getProviders(props.inscricao);
    console.log('response', response);
    if (response.length > 0) {
      throw new Error('erro');
    }
    database().ref('providers/').push(props);
    Modal.show(() => (
      <Default
        cancel={false}
        title="❌"
        description="sucesso ao cadastrar fornecedor!!"
      />
    ));
    return props;
  } catch (error) {
    return Modal.show(() => (
      <Default
        cancel={false}
        title="❌"
        description="Erro ao cadastrar usuário!!"
      />
    ));
  }
}

type ICreateUserSaga = ActionType<typeof Creators.user.create.request>;

function* PostUserSaga({payload: {data}}: ICreateUserSaga) {
  try {
    const response = yield PostUser(data);
  } catch (err) {
    yield put(Creators.login.failure({error: err.message}));
    yield put(Creators.user.create.failure({error: err.message}));
  }
}

export default takeLatest(Types.POST_USER, PostUserSaga);
