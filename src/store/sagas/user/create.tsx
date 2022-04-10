import React from 'react';
import {takeLatest, call, put} from 'redux-saga/effects';
import {Types, Creators} from '~store/reducers';
import * as Modal from '~services/modal';
import {Default} from '~modals';
import {ActionType} from 'typesafe-actions';
import database from '@react-native-firebase/database';

function* PostUser(props) {
  try {
    props = {...props, id: Math.floor(new Date()), type: 1};
    database()
      .ref('users/' + props.inscricao + props.password)
      .set(props);
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
