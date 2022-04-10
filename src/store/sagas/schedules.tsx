import React from 'react';
import {takeLatest, select} from 'redux-saga/effects';
import database from '@react-native-firebase/database';
import * as Modal from '~services/modal';
import {Default} from '~modals';
import {getUser} from '~store/selectors';

function* addSchedule({payload}) {
  try {
    const {date, quant, client, availability} = payload;
    const {name} = yield select(getUser);

    database()
      .ref('abate/' + date)
      .set({
        id: date,
        qnt: availability - quant,
      });
    database()
      .ref('schedules/' + client + '%' + date)
      .set({
        id: date,
        qnt: quant,
        client: client,
        nameClient: name,
      });
    Modal.show(() => (
      <Default cancel={false} title="✅" description="AGENDADO COM SUCESSO!!" />
    ));
  } catch (error) {
    Modal.show(() => (
      <Default
        cancel={false}
        title="❌"
        description="ERRO AO REALIZAR AGENDAMENTO!!"
      />
    ));
  }
}

export default takeLatest<any>('schedules', addSchedule);
