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
  let filtro = data.find(r => r.inscricao === inscricao);
  return filtro;
}
function* PostUser(props, navigation, edit) {
  try {
    props = {...props, id: Math.floor(new Date())};
    if (!edit) {
      const response = yield getProviders(props.inscricao);
      if (response) {
        throw new Error('erro');
      }
    }
    database().ref('providers/').push(props);
    Modal.show(() => (
      <Default
        cancel={false}
        buttons={[{id: 0, title: 'Ok', onPress: () => navigation.goBack()}]}
        title="✅"
        description="sucesso ao cadastrar fornecedor!!"
      />
    ));
    return props;
  } catch (error) {
    console.log(error);
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

function* PostUserSaga({payload: {data, navigation, edit}}: ICreateUserSaga) {
  try {
    const response = yield PostUser(data, navigation, edit);
  } catch (err) {
    yield put(Creators.login.failure({error: err.message}));
    yield put(Creators.user.create.failure({error: err.message}));
  }
}

export default takeLatest(Types.POST_USER, PostUserSaga);
