import React from 'react';
import {takeLatest} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import * as Modal from '~services/modal';
import {Default} from '~modals';
import moment from 'moment';

function* addAbate({payload}) {
  try {
    const {date, boi, vaca} = payload;
    let id = moment(date).format('DD-MM-YYYY');
    database()
      .ref('abate/' + id)
      .set({
        id: id,
        boi: boi,
        vaca: vaca,
        boiD: boi,
        vacaD: vaca,
      });
    Modal.show(() => (
      <Default
        cancel={false}
        title="✅"
        description="ABATE CADASTRADO COM SUCESSO!!"
      />
    ));
  } catch (error) {
    Modal.show(() => (
      <Default
        cancel={false}
        title="❌"
        description="ERRO AO CADASTRAR ABATE!!"
      />
    ));
  }
}

export default takeLatest<any>('addAbate', addAbate);
